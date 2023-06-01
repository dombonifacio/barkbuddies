export interface Footer {
    
    // can only read. values cannot be modified once section object is instantiated
    readonly title: string,
    readonly contents: string[],
    // "?" makes it optional
    readonly image?: string
    
}



// make an array containing this interface