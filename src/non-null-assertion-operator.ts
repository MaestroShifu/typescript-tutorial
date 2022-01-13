const sendEmail = (email: string) => {
    console.log('sent email to', email);
};

const getInfo = () => {
    return {
        name: 'daniel',
        email: 'daniel@gmail.com'
    }
}

const info = getInfo();
sendEmail(info!.email); // ! Simbolo que la no va a estar nulo - Solo funciona con variables typo any