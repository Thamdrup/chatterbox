function displayNotification() {
    if (Notification.permission == 'granted') {
        navigator.serviceWorker.getRegistration().then(function (reg) {
            var options = {
                body: 'Here is a notification body!',
                icon: 'public/assets/media/giif.gif',
                vibrate: [100, 50, 100],
                data: {
                    dateOfArrival: Date.now(),
                    primaryKey: 1
                },
                actions: [
                    {
                        action: 'explore', title: 'Explore this new world',
                        icon: 'public/assets/images/icons/v-icon.png'
                    },
                    {
                        action: 'close', title: 'Close notification',
                        icon: 'public/assets/images/icons/x-icon.png'
                    },
                ]
            };
            reg.showNotification('Hello world!', options);
        });
    }
}