import { Invoice } from "../models/invoice";

export const invoiceData: any = {
    id: 1,
    name: 'Componentes de PC',
    client: {
        name: 'Andres',
        lastname: 'Doe',
        address:{
            country: 'Colombia',
            city: 'Manizales',
            street: 'Minitas',
            number: 1081
        }
    },
    company:{
        name: "Frutas del campo SAS",
        fiscalNumber: 12345
    },
    items:[
        {
            id: 1,
            product: 'AMD RYZEN 5 2600',
            price: 250,
            quantity: 1
        },
        {
            id: 2,
            product: 'AMD RYZEN 7 9200',
            price: 600,
            quantity: 5
        },
        {
            id: 3,
            product: 'TECLADO MECANICO REDRAGON',
            price: 159,
            quantity: 3
        }
    ]
}
