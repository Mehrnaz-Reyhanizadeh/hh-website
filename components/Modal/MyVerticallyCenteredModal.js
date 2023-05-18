import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";

function MyVerticallyCenteredModal(props) {
  const { src, alt } = props;
  const imageLoader = ({ src }) => {
    // console.log(`imageLoader src='${src}'`);
    const url = new URL(src, process.env.NEXT_PUBLIC_BASE_URL);
    // console.log(`imageLoader url.href='${url.href}'`);
    return url.href;
  };
  return (
    <>
      {/* {console.log(`props src='${src}'`)} */}
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{alt}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <Image
            src={`${src}`}
            alt={`${alt}`}
            width={500}
            height={500}
            loader={imageLoader}
            className="w-100 h-100"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default MyVerticallyCenteredModal;
