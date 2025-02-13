function updateProfile(user) {
  const db = getFirestore();
  const userRef = doc(db, 'users', user.uid);

  try {
    const updateResult = await updateDoc(userRef, {
      displayName: user.displayName,
      photoURL: user.photoURL,
    });
    console.log('Profile updated successfully!', updateResult);
  } catch (error) {
    console.error('Error updating profile:', error);
    // Log error details to a centralized error reporting service
    // Consider additional error reporting techniques
    // such as alerting users of a failure
  }
} 