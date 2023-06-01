export enum Title {
    Adopt = 'Adopt a Dog',
    Foster = 'Foster a Dog',
    Give = 'New Home',
    Service = 'Service Dog',
    Police = 'Police Dog',
    Other = 'Other'
    
}

export interface Card {
    icon: string,
    title: Title
    description: string
}

