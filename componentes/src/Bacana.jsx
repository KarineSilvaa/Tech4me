const Bacana = () => {

    const propriedades ={
        src : "https://www.petmag.com.br/app/uploads/petteca/famosos/8371/bacana-01.jpg",
        style: {
            height: "100px",
            borderRadius: "4px",
            border: "2px solid green",
        },
        alte: "Esse é novo",
    };
    return (
        <div>
            <img {...propriedades} />
        </div>
    );
};

export default Bacana;