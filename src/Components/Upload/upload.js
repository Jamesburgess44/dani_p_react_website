import axios from 'axios';
import React, {useState} from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import AllPhotosTable from './../AllPhotosTable/allPhotosTable';

const Upload = (props) => {
    let id;
    if(props.currentUser !== undefined) {
        id = props.currentUser.user.id; 
    }
    const initialInput = {
        Category: "",
        ShootName: "",
        Image: "",
        UserId: id
    }
    const [eachEntry, setEachEntry] = useState(initialInput)
    const [nameError, setNameError] = useState({})
    const [descriptionError, setDescriptionError] = useState({})

    const pictureFormValidation = () => {
        const nameError = {};
        const descriptionError = {};
        ;
        let isValid = true;
        if (eachEntry.ShootName.trim().length === 0) {
            nameError.productNameEmpty = "Image name is required"
            isValid = false;
        }
        if (eachEntry.Category.trim().length === 0) {
            descriptionError.descriptionEmpty = "Image category is required"
            isValid = false;
        }
        setNameError(nameError);
        setDescriptionError(descriptionError);
        return isValid;
    }
    const handleChange = (event) => {
        setEachEntry({...eachEntry, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        submitProduct();
    }
    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader()
        try{
        reader.readAsDataURL(file)
        }
        catch{
            eachEntry.Image = ""
        }   
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
    })

    const handleFile = async (event) => {

        let file = event.target.files[0]
        let response = await toBase64(file);
        eachEntry.Image = response
    }

    const submitProduct = async () => {
        let productData = eachEntry
        const isValid = pictureFormValidation();
        if(isValid){
            await axios.post("https://localhost:44394/api/pictures", productData).then(res => {
            if(res.data.length !== 0){
                setEachEntry(initialInput);
                console.log(productData)
                toast.success('Product has been uploaded successfully');
            }
            })
            .catch(error => {
                if (error){
                    toast.error('Product was unable to be uploaded succesfully');
                }

            })

        }
    }
    return (
        <React.Fragment>
        <Container>
            <Row>
                <Col sm={8}>
                <h1 className="title mb-3">Add A New Photo, Must Be Exact With Shoot Name and Category For Tables To Correctly Populate</h1>
                <ToastContainer />
                </Col>
                <Col sm={4}></Col>
            </Row>
        </Container>
        <Container>
            <Row>
                <Col sm={4}></Col>
                <Col sm={4}>
                <Form onSubmit={handleSubmit}>
                        <div>
                    <h5 className="title"> Shoot Name</h5>
                    <input className=" form-control" value={eachEntry.ShootName} onChange={handleChange} name="ShootName" placeholder="Shoot Name..."></input>
                    {Object.keys(nameError).map((key) => {
                        return <div style={{color: "yellow"}}>{nameError[key]} </div>
                    })}
                    </div>
                    <div>
                    <h5 className="title"> Shoot Category</h5>
                    <input className=" form-control" value={eachEntry.Category} onChange={handleChange} name="Category"placeholder="Category..."></input>
                    {Object.keys(descriptionError).map((key) => {
                        return <div style={{color: "yellow"}}>{descriptionError[key]} </div>
                    })}
                    </div>
                    <div>
                    <h5 className="title">Image</h5>
                    <input className=" form-control" type="file" onChange={(event) => handleFile(event)} name="Image"></input>
                    </div>
                    <Button style={{backgroundColor: "black", borderColor: "crimson"}} className="mt-2 mb-2" type="submit">Submit New Photo</Button>
                    </Form>
                </Col>
                <Col sm={4}></Col>
            </Row>
        </Container>
        <Container>
            <AllPhotosTable />
        </Container>
        </React.Fragment>
    )
}

export default Upload