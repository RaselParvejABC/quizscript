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
            <p>
              এই হুক দুই রেন্ডারের মাঝে কোনো ভ্যালু পার্সিস্ট করতে সাহায্য করে।
            </p>
            <p>
              এই হুক একটি মিউটেবল ref অবজেক্ট রিটার্ন করে, যার মিউটেবল current
              প্রোপার্টি ইনিশিয়ালাইজ হয় এই হুকে দেওয়া আর্গুমেন্ট দিয়ে। এরপর
              কম্পোনেন্ট রি-রেন্ডার হলেও এই হুক একই ref অবজেক্ট রিটার্ন করে;
              কম্পোনেন্টের প্রতি রেন্ডারে নতুন ref অবজেক্ট ক্রিয়েট করে না। বরং
              ১ম বারের অবজেক্টটিকেই বারবার রিটার্ন করে। ফলে এই অবজেক্টের current
              প্রোপার্টিতে রাখা ভ্যালু রি-রেন্ডারের আগে-পরে একই থাকে।
            </p>
            <p>
              এই হুকের মাধ্যমে এমন মিউটেবল ডাটা স্টোর করা যায়, যা চেঞ্জ হলে
              কম্পোনেন্ট রি-রেন্ডার হবে না। আবার, অন্য কোনো কারণে রি-রেন্ডার
              হলেও এর ভ্যালু চেঞ্জ হবে না।
            </p>
            <p>
              এই হুকের একটি উল্লেখযোগ্য ব্যবহার হলো—কোনো ডম এলিমেন্টকে
              ইম্পারেটিভলি এক্সেস করা।
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default Blog;
