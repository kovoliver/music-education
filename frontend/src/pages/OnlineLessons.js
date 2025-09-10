import Contact from "../components/Contact";

function OnlineLessons() {
    return(
        <div className="container-lg box-white p-md rounded-top-right rounded-top-left rounded-bottom-right rounded-bottom-left">
            <h1>Mentorship Program</h1>

            <p>
                Do you want to take your compositions to the next level?  
                Whether you are just starting out or already have some experience,  
                I’ll help you turn music theory into real, inspiring pieces.  
            </p>

            <p>
                Instead of only memorizing concepts, you’ll discover how to use them creatively.  
                We’ll work on practical examples: writing satisfying chord progressions,  
                building melodies that truly connect with the listener, and using  
                instruments effectively in your arrangements.  
            </p>

            <p>
                You’ll also get personalized feedback on your own music.  
                This isn’t just about learning theory—it’s about becoming a confident composer  
                who knows how to bring ideas to life.  
            </p>

            <p>
                <b>Price: $40/hour</b><br/>
                <i>Book your first lesson today and start composing with confidence!</i>
            </p>

            <h2>Ready to get started?</h2>
            <p>Fill out the form below and I’ll get back to you as soon as possible!</p>

            <Contact/>
        </div>
    );
}

export default OnlineLessons;