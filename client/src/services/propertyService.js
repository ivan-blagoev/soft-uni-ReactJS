import * as request from "../operations/request";

const baseUrl = 'http://localhost:3030/data/properties'

export const getAllProperties = async () => {
    const result = await request.get(baseUrl);

    return result;
};


export const create = async (propertyData) => {
    const result = await request.post(baseUrl, propertyData);

    return result;
};