import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

const LOADING_IMAGE_URL = 'https://www.google.com/images/spin-32.gif';
const PROFILE_PLACEHOLDER_IMAGE_URL = '/assets/images/profile_placeholder.png';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  user: Observable<firebase.User>;
  currentUser: firebase.User;
  messages: FirebaseListObservable<any>;
  profilePicStyles: {};
  value = '';
  messageForm : FormGroup;
  burger = false;

  constructor(public db: AngularFireDatabase, public afAuth: AngularFireAuth, private fb: FormBuilder) {
    this.messageForm = fb.group({
       'message': [null, Validators.required]
     });

    this.user = afAuth.authState;
    this.user.subscribe((user: firebase.User) => {
      this.currentUser = user;

      // User is signed in!
      if (user) {
        this.profilePicStyles = {
          'background-image':  `url(${this.currentUser.photoURL})`
        };

        // We load currently existing chat messages.
        this.messages = this.db.list('/messages', {
          query: {
            limitToLast: 12
          }
        });
        this.messages.subscribe((messages) => {
          // Make sure new message scroll into view
          setTimeout(() => {
            const messageList = document.getElementById('messages');
            messageList.scrollTop = messageList.scrollHeight;
            document.getElementById('message').focus();
          }, 500);
        });

        // We save the Firebase Messaging Device token and enable notifications.
        this.saveMessagingDeviceToken();
      } else { // User is signed out!
        this.profilePicStyles = {
          'background-image':  PROFILE_PLACEHOLDER_IMAGE_URL
        };
      }
    });
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.messages = null;
    this.afAuth.auth.signOut();
  }

  // Returns true if user is signed-in. Otherwise false and displays a message.
  checkSignedInWithMessage() {
    // Return true if the user is signed in Firebase
    if (this.currentUser) {
      return true;
    }

    return false;
  };

  saveMessage() {
    if (this.value && this.checkSignedInWithMessage()) {
      // Add a new message entry to the Firebase Database.
      const messages = this.db.list('/messages');
      messages.push({
        name: this.currentUser.displayName,
        text: this.value,
        photoUrl: this.currentUser.photoURL || PROFILE_PLACEHOLDER_IMAGE_URL
      }).then(() => {
        // Clear message text field and SEND button state.
        this.value = '';
      }).catch((err) => {
        console.error(err);
      });
    }
  }

  // TODO: Refactor into image message form component
  onImageClick(event: any) {
    event.preventDefault();
    document.getElementById('mediaCapture').click();
  }

  // Saves the messaging device token to the datastore.
  saveMessagingDeviceToken() {
    return firebase.messaging().getToken()
      .then((currentToken) => {
        if (currentToken) {
          // Save the Device Token to the datastore.
          firebase.database()
            .ref('/fcmTokens')
            .child(currentToken)
            .set(this.currentUser.uid);
        } else {
          // Need to request permissions to show notifications.
          // TODO: Add Notifications
          // return this.requestNotificationsPermissions();
        }
      }).catch((err) => {
        console.error(err);
      });
  };

  // Requests permissions to show notifications.
  // requestNotificationsPermissions() {
  //   console.log('Requesting notifications permission...');
  //   return firebase.messaging().requestPermission()
  //     // Notification permission granted.
  //     .then(() => this.saveMessagingDeviceToken())
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };
}
