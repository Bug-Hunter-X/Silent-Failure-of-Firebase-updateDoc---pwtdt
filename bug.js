function updateProfile(user) {
  const db = getFirestore();
  const userRef = doc(db, 'users', user.uid);

  try {
    await updateDoc(userRef, {
      displayName: user.displayName,
      photoURL: user.photoURL,
    });
    console.log('Profile updated successfully!');
  } catch (error) {
    console.error('Error updating profile:', error);
    // Handle error appropriately, e.g., display an error message to the user.
  }
}