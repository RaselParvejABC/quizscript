import React from "react";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";

const Blog = () => {
  return (
    <Container className="text-bangla">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            React Router প্যাকেজের উদ্দেশ্য কী?
          </Accordion.Header>
          <Accordion.Body>
            <p>
              এই প্যাকেজের উদ্দেশ্য হলো ক্লায়েন্ট সাইডে রাউটিং বাস্তবায়ন করা।
            </p>
            <p>
              ইউআরএল অনুযায়ী পেজ কনটেন্ট পরিবর্তন করাকে বলা হয় রাউটিং। আর
              ডকুমেন্ট ব্রাউজারে রিলোড না করেই ক্লায়েন্ট সাইটে এই কাজটি করাই হলো
              ক্লায়েন্ট সাইড রাউটিং।
            </p>
            <p>
              প্রাথমিক পরিচয়ে Routing-এর সম্পর্কে যদ্দুর আঁচ করা যায়, রাউটিং-এর
              সাথে তদ্দুরের চেয়েও অনেক অনেক বেশি ব্যাপার জড়িত।
            </p>
            <p>
              React Router প্যাকেজের উদ্দেশ্য হলো— রিএক্ট এ্যাপে ক্লায়েন্ট সাইট
              রাউটিং যুক্ত করার কাজটিকে সহজ করা।
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Context API কীভাবে কাজ করে?</Accordion.Header>
          <Accordion.Body>
            <p>
              প্রপ ড্রিলিং এড়িয়ে একটি কম্পোনেন্ট যদি এর ডিসেন্ড্যান্টদেরকে কোনো
              ডাটা প্রোভাইড করতে চায়, তাহলে সমাধান হলো Context API।
            </p>
            <p>
              createContext() দিয়েই শুরু। এই ফাংশন একটি Provider ও একটি Consumer
              রিটার্ন করে।
            </p>
            <p>
              Provider হলো ঐ কম্পোনেন্ট, যা কম্পোনেন্ট ট্রিতে এর
              ডিসেন্ড্যান্টদেরকে স্টেট ডাটা প্রোভাইড করে।
            </p>
            <p>
              Consumer হলো ঐ কম্পোনেন্ট, যে ঐ ডাটা কনজ্যুম করবে। অবশ্য
              useContext হুক ব্যবহার করে Consumer কম্পোনেন্টের কাজ সহজ করা যায়।
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>useRef() হুক সম্পর্কে বলুন।</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default Blog;
