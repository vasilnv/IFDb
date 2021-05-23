
const api = {
    //userControler
    getUser: userId => `/users/${userId}`,
    getUserByEmail: userEmail => `/auth/email/${userEmail}`,
    registerUser: () => `/users/register`,
    loginUser: () => `/users/login`,
    restaurant: (userId) => `/restaurants/${userId}`,
    getFriend: friendId => `/users/friend/${friendId}`,
    updateUser: () => `/user/uploadPicture`,
    getFriends: () => `/users/all`,
    getFriendsList: friendId  => `/users//friends/${friendId}`,
    //MessagingControler
    getGroup: (id) => `/group/${id}`,
    sendMessage: () => `/messages/sendMessage`,

    addGroup: () => `/group`,
}

export default api;
