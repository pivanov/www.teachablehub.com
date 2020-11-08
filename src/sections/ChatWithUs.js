import Link from 'next/link';
import { Row } from 'reactstrap';
// import ChatBubbleIcon from "mdi-react/ChatBubbleIcon";

const ChatWithUs = () => {
  return (
    <Row className="mt-md-5 pt-md-3 mt-4 pt-2 mt-sm-0 pt-sm-0 justify-content-center">
      <div xs="12" className="text-center">
        <div className="section-title">
          <h4 className="title mb-4">Couldn't find answers to any of your questions?</h4>
          <p className="text-muted para-desc mx-auto">There is a way to find an answer to all of your questions. Our team is here to help!</p>
          <div className="mt-4 pt-2">
            <Link href="/#chat">
              <a className="btn btn-primary">Chat With Us</a>
            </Link>
          </div>
        </div>
      </div>
    </Row>
  )
}

export default ChatWithUs;
