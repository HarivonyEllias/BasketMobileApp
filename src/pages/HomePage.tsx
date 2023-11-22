// HomePage.tsx

import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Table from '../components/Table'; // Import the Table component
import '../styles/MainTheme.css'; // Import CSS file for styling
import '../styles/HomePage.css'; // Import CSS file for styling
import Navbar from '../components/Navbar';


const HomePage: React.FC = () => {
  return (
    <>
    <Navbar />
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>NBA Stats Home</IonTitle>
        </IonToolbar>
      </IonHeader> */}
        <Table /> {/* Render the Table component */}
    </IonPage>
    </>
  );
};

export default HomePage;
