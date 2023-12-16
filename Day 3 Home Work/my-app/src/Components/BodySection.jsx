import React from "react";
import "../App.css";

const BodySection = () => {
  return (
    <div>
      <div>
        <img
          className="banner"
          src="https://th.bing.com/th/id/R.b0941ae049cfe1242b875ee0ea722236?rik=TmhTt6vbVP7Rsg&riu=http%3a%2f%2fwww.lionleaf.com%2fwp-content%2fuploads%2f2014%2f11%2f1415275_22821821.jpg&ehk=7bK0H1iqq%2fkS48m0bbON6BfPoegjSZFfXu%2bC3ztcrvI%3d&risl=&pid=ImgRaw&r=0"
        />
      </div>
      <div className="contact">
        <h1>Think Health. Think Massage.</h1>
        <p>
          We are open 9am to 9pm, Monday through Sunday. If you would like to
          schedule an appointment <br />
          with us, please call us at 987-654-3210 today!
        </p>
        <div className="button-container">
          <button>LEARN MORE ABOUT US</button>
          <button>CONTACT US TODAY</button>
        </div>
      </div>
      <div className="vacancy">
        <p className="first">
          Are looking for a professional registered massage therapist? Sample
          Massage Therapy has 4 registered massage
          <br /> therapist who can provide clinical massage.
        </p>
        <p>
          We are commited to your ling term health and well-being. Our
          multi-disciplinary clinic provides a balanced approach to a healty
          lifestyle.
          <br /> Enchance your health and improve your performance with out
          treatments.
        </p>
        <p>
          We welcome you to come explore all the benefits you'll enjoy of out
          valued guests. Our professinal staff is commited to offering the
          <br /> best massage theraoy in Mainland.
        </p>
      </div>
      <hr />
      <div className="address">
        <h3>Family Wellness Massage Therapy</h3>
        <p>
          9876 Main Street, Suite 123, Mainland, ML12345 <br />
          Phone: 987-654-3210
        </p>
      </div>
    </div>
  );
};

export default BodySection;
