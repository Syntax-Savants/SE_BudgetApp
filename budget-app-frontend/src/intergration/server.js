
export const user = async () => {
    const response = await fetch('http://localhost:8080/user');
    return response;
};



