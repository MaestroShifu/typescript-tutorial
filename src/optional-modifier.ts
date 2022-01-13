type PersonalInfo = {
    name: string;
    email: string;
    phone?: string;
};

const bruce: PersonalInfo = {
    name: 'Bruce',
    email: 'belt@example.com',
    phone: '911'
};

const alfred: PersonalInfo = {
    name: 'Bruce',
    email: 'alfred@example.com'
};

console.log(alfred.phone) // undefined