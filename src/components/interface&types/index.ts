interface ContentInterface {
    text: string;
};

interface ContentInterface {
    icon: string;
};

interface ContentInterface {
    amount: number;
};

export function ExampleInterface(a: ContentInterface) {
    a.text = 'Lorem Ipsum';
    a.icon = 'Icon Ipsum';
    a.amount = 123;

    return a;
};

// type ContentType = {
//     text: string;
// };

// type ContentType = {
//     icon: string;
// };

// type ContentType = {
//     amount: number;
// };
