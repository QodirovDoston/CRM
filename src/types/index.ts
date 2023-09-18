import { ChangeEvent } from "react";
export type Id = string | number;

export type CreatePage = {
    addedDate: string;
    birthdayDate: string;
    extraData: {
        additionalProp1: {
            // qoshimchaTell: Id;
            // id: Id;
            // otaOna: string;
            // gmail: string;
            // username: string;
            // map: any;
            // pasport: any;
            // tag: string;
            // CheagirmaNarx: Id;
        };
    };
    fullName: string;
    password: string;
    phoneNumber: string;
    photo: string;
    role: string;
}


export type Column = {
    id: Id;
    title: string;
};

export type Task = {
    id: Id;
    columnId: Id;
    content: string;
};



export interface IBaseUser {
    name: string;
    profession: string;
    age: number | string;
}
export interface IUser extends IBaseUser {
    id: number;
}

export interface CustomButtonProps {
    ikkiImg?:string
    text?: string,
    className?: string,
    btnImg?: string,
    btnImg2?: string,
    btnStyle?: string,
    textStyle?: string,
    btnImgStyle?: string,
    btnImg2Style?: string,
    handleClick?: (event: React.MouseEvent<HTMLElement>) => void;
    childern?: NodeList,
    item?: object
    ref?: any
    // iconSee?: boolean,
}


export interface Inputs {
    example: string,
    exampleRequired: string,
    group: string;
    comment: string;
    birthdayDate: number;
    fullName: string;
    phoneNumber: string;
    password: any;
    addedDate: number;
    role: string;
    photo: string;
    id: number;
    QoshimchaTel: string;

};

export interface FullName {
    id: string;
    fullName: string;
    phoneNumber: string;
    birthdayDate: string;
    photo: string;
    type: string;
    role: string;
}

export interface CustomInputProps {
    inputStyle?: string,
    placeholder?: string,
    error?: boolean,
    disabled?: boolean,
    name?: string,
    label?: string,
    value?: string | number,
    inputType?: "text" | "number" | "email" | "password" | "radio" | "date" | "search",
    handleChange?: (e: ChangeEvent<HTMLInputElement>) => void,
    loupe?: string
}


export interface CommonCardProps {
    cardNumber?: string,
    title?: string,
    imgCard?: string,
    cardStyle?: string,
    imgStyle?: string
}


export interface CustomNavlinks {
    NavlinkImg?: string,
    text: string,
    toPath: string,
    navlinkStyle?: string,
    textStyle?: string,
    borderNavlinkStyle?: string,
    imgNavLink?: string
}


export type SignInPropType = {
    label?: string
}



export type TeacherProp = {
    name?: string,
    id?: number | string,
    birthday?: string,
    phone?: string,
    rol?: string,
    count?: string,
    img?: string
}
export type TeacherPropList = {
    img?: string,
    birthday?: string,
    id?: number | string,
    name?: string
}

export type ItemPropType = {
    title?: string,
    text?: string,
    left?: string,
    left1?: string
}


export type ChildTeacherPropType = {
    group?: string,
    type?: string,
    event?: string,
    price?: string,
    students?: string,
    rol?: string,
    img: string
}

export type Istate = {
    isValue?: boolean,
    index?: Number
}
