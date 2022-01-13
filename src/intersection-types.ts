type PersonInfo = {
    name: string;
};

type Email = {
    email: string;
};

type Phone = {
    phone: string;
};

type ContactDetails = PersonInfo & Email & Phone;

const contact = (details: ContactDetails) => {
    console.log(`
        Dear ${details.name}
        I hope you received our email at ${details.email}
        We will call you at ${details.phone} shortly  
    `);
}