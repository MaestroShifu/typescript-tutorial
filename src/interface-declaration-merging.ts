export interface Request {
    body: any;
}

export interface Request {
    json: any;
}

const handleRequest = (req: Request) => {
    console.log(req.body);
    console.log(req.json);
};

handleRequest({
    body: [],
    json: []
});
