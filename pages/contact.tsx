import { Email, LocationOn, PhoneAndroid } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useState } from 'react';
import PageLayout from '../components/PageLayout/PageLayout';
import styles from '../styles/Contact.module.css';

export default function Contact() {
    const [userInfo, setUserInfo] = useState({
        fullname: '',
        email: "",
        phone: "",
        comment: ""
    });
    const inputEvent = (e: any) => {

        const { name, value } = e.target;
        setUserInfo((pre: any) => {
            return {
                ...pre,
                [name]: value
            }
        })
    }
    const submitMessage = (e: any) => {
        e.preventDefault();
        fetch("/api/post-content", {
            headers: {
                "content-type": "application/json",
                "Accept": "application/json"
            },
            method: "POST",
            body: JSON.stringify(userInfo)
        })
            .then((res: any) => {
                return res.json();
            })
            .catch((data) => {
                console.log(data);
            })
    }

    return (
        <PageLayout
            pageTitle='Blog | Contact'
            pageHeading='Contact-Us'
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            showCover={true}
        >
            <div className={styles.wrapper}>
                <div className={styles.column}>
                    <h1 className='contact-header' style={{
                        textAlign: "center",
                        margin: ".6em 0"
                    }}>-- Whenever You Need Us , We&apos;re Here For You --</h1>
                    
                </div>
                <div className={styles.column + " " + styles.d_flex}>
                    <div className={styles.messages_description}>
                        <h1>Message Us</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <div className={styles.contact_info}>
                        <div className={styles.contact}>
                            <div className={styles.icon}><PhoneAndroid /> </div>
                            <h3>Call- Us</h3>
                            <p>+977-9876756669</p>
                        </div>
                        <div className={styles.contact}>
                            <div className={styles.icon}><Email /> </div>
                            <h3>Email - Us</h3>
                            <p>xyzcompany@gmail.com</p>
                        </div>
                        <div className={styles.contact}>
                            <div className={styles.icon}><LocationOn /></div>
                            <h3>Our -Location</h3>
                            <p>Nepalgunj ,Banke, Nepal</p>
                        </div>
                    </div>
                    </div>
                    <form className={styles.form} onSubmit={submitMessage}>
                        <div className={styles.form_group}>
                            <label htmlFor="full name">Full Name</label>
                            <input value={userInfo.fullname} onChange={inputEvent} className={styles.input_control} name='fullname' placeholder={"Full Name"} />
                        </div>
                        <div className={styles.form_group}>
                            <label htmlFor="email">email</label>
                            <input value={userInfo.email} onChange={inputEvent} name='email' className={styles.input_control} placeholder={"email"} />
                        </div>
                        <div className={styles.form_group}>
                            <label htmlFor="phone">phone</label>
                            <input value={userInfo.phone} onChange={inputEvent} name='phone' className={styles.input_control} placeholder={"phone"} />
                        </div>
                        <div className={styles.form_group}>
                            <label htmlFor="comment">comment</label>
                            <textarea value={userInfo.comment} onChange={inputEvent} name='comment' className={styles.input_control + " " + styles.text_area} placeholder={"comment"} />
                        </div>
                        <Button type="submit" > submit </Button>
                    </form>
                </div>
            </div>
        </PageLayout>

    )
}
