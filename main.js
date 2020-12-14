const showmore=(event)=>{
    // console.log("hello inside the showmore function");
    const faqID="faq"+event;
    const faqIDdoc=document.getElementById(faqID);
    // console.log(faqIDdoc.classList);
    if(faqIDdoc.className==="faq__answers")
    {
        // console.log("if loop");
        faqIDdoc.className = "faq__answers__visible";
    }
    else{
        // console.log("else loop");
        faqIDdoc.className = "faq__answers";
    }
    
}