import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Kaouka.css";

const Realisation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const main = () => {
    navigate("/Realisation");
  };

  return (
    <div>
        <h1>General conditions of use</h1>
      <p>
      Article 1: Purpose
The purpose of these general conditions of use (hereinafter the “GCU”) is to define the terms and conditions of use of the Kaouka social network (hereinafter the “Network”).
Article 2: Access to the Network
The Network is accessible free of charge to any user with an internet connection and a compatible mobile device. The user is responsible for the installation and maintenance of his/her computer equipment and Internet connection.
Article 3: Anonymity and confidentiality
The Network is accessible anonymously. The user chooses a pseudonym and a profile image which must not allow identification. Only the user's location is retrieved by the application. The user's IP address is only collected in the event of non-compliance with the GCU.


Article 4 : Content and publications
The user may publish photos, videos, audios and texts on the Network, or any other content that is subject to further development.
Published content must not offend the sensibilities of others. Explicit content is forbidden.
Article 5: Communication and interaction
The Network enables users to contact other users in their vicinity by private message.
The user may block any content originating from a specific user.
Article 6: Sharing and republishing
A future version of the Network will allow users to republish posts in order to share information.
Article 7: Profile and data
By accessing a user's profile, it is possible to view all his or her publications.
The user can like and comment on other users' publications.
Article 8: Collection, storage and security of personal data
8.1 Data collection
Kaouka collects the following personal data from the user:
Username
Email address
Profile photo
Geolocation
Published content (photos, videos, audio, text)
Comments and likes
IP address (in the event of non-compliance with the GCU)

8.2 Data processing purposes
Personal data collected by Kaouka is used for the following purposes:
To provide the user with access to the Network and its functionalities
To improve the user experience
To personalize content and advertising
To ensure the security of the Network
Carry out statistics and analyses
8.3 : Recipients of personal data
Personal data collected by Kaouka is never sold to third parties. It is only accessible to authorized Kaouka personnel and its subcontractors, within the framework of the execution of services.
8.4 : User rights
The user has the following rights with regard to his/her personal data:
Access
Rectification
Deletion
Limitation of processing
Opposition to processing
Portability
The user may exercise his rights by contacting Kaouka by email at [email address].
8.5 Retention of personal data
The user's personal data is kept for the duration of use of the Network. It is then deleted, unless its retention is necessary for legal or evidentiary reasons.
8.6 Security of personal data
Kaouka undertakes to implement all technical and organizational measures necessary to guarantee the security of the user's personal data.
User data (username, profile photo, geolocation, publications, comments and likes) are stored on a secure server.
Only posts, comments and likes are shared with other users. Geolocation is never communicated.
An approximate distance is provided to users, who are ranked from closest to furthest away.
Users are given an approximate distance, ranked from nearest to furthest away.
Only people in the vicinity of the user's location have access to their information.
Article 9: Modification of the GCU
Kaouka reserves the right to modify the GCU at any time. The modified GTU will come into force on the date of their publication on the Network.
Article 10: Acceptance of the GCU
Use of the Network implies full acceptance of the GCU by the user.
Article 11 : Penalties and termination
11.1 Breach of obligations by the user
In the event of a breach of the obligations set out in the GCU, the publisher may take the following measures:
Suspension of access to the application: The publisher may suspend access to the application for a fixed or indefinite period.
Account termination: The publisher may terminate the user's account in the event of serious or repeated breach of the GCU.
11.2 Termination of contract by the publisher
The publisher may terminate the contract at any time, with or without notice, for the following reasons:
Violation of the GCU by the user
cessation of business by the publisher
Article 12: Intellectual property
All content and elements of the Network, including texts, images, videos, sounds, trademarks, logos, databases and software, are protected by copyright, trademark law and patent law.
The user has a personal, non-exclusive and non-transferable right to use the Network. The user is authorized to download and reproduce the contents of the Network for personal use only.
The user agrees not to:
Reproduce, represent, modify, distribute or adapt all or part of the Network without the express authorization of the Network owner; 
Extract or substantially reuse content from the Network;
Create hypertext links to the Network without the express authorization of the Network owner;
Use the Network for commercial or advertising purposes without the express authorization of the Network owner.
Failure to comply with this intellectual property clause may result in legal action being taken against the user.
Article 13: Responsibility of the publisher
The publisher undertakes to use all necessary means to guarantee the correct operation of the application. However, it cannot be held responsible for interruptions, malfunctions, bugs, viruses or loss of data.
The editor is responsible for the content published on the application. He undertakes not to disseminate any content that is illicit, defamatory, offensive or that infringes the rights of third parties.
The editor undertakes to correct errors and bugs in the application as soon as possible.
The publisher is liable for any damage caused to the user by the application, except in the event of force majeure or fault on the part of the user.
Article 14: Applicable law and jurisdiction
The GCU are governed by French law. In the event of a dispute, the French courts shall have exclusive jurisdiction.
Ignoring the terms and conditions of use and continuing to use the Kaouka application means that you accept the terms and conditions of use.
Kaouka specific condition:
Pork, alcohol and products to be inhaled (cigarette, vapoteur ...) are prohibited, the network kaouka reserves the right of moderation.
      </p>
    </div>
  );
};

export default Realisation;
