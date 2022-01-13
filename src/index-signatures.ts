type DataPerson = {
    displayName: string,
    email: string
};

type PersonDictionary = {
    [username: string]: DataPerson | undefined;
}

const persons: PersonDictionary = {
    jane: {
        displayName: 'Jane Doe',
        email: 'jane@example.com'
    }
};

const result = persons['missing'];
console.log(result, result?.email);
