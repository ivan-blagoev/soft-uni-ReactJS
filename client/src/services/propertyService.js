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

export const getOneProperty = async (propertyId) => {
    const result = await request.get(`${baseUrl}/${propertyId}`, );

    return result;
}


export const editProperty = async (propertyId, propertyData) => {
    const result = await request.put(`${baseUrl}/${propertyId}`, propertyData);

    return result;
};



export const remove = async (propertyId) => request.remove(`${baseUrl}/${propertyId}`);


export const search = async (searchName, searchType) => {
    
    let properties = await this.getAllProperties()

    if(searchName){
        properties = properties.filter( x => x.title == searchName)
    }

    if( searchType){
        properties =  properties.filter(x => x.type == searchType)

    }

    return properties;
}


