

const page = ({params} : {params :{id : string}}) => {
    return (
        <div>
          <h2>This is Car ID :{params.id} </h2>
        </div>
    );
};

export default page;