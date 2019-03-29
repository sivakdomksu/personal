let changeResumeDimensions = function() {
    let main = $('main');
    let resume = $('#resume');
    let resumeContainer = $('#resume-container');
    resume.width(resumeContainer.width());
    resume.height(main.height()
        - parseInt(resumeContainer.css('marginTop').replace('px', ''))
        - parseInt(resumeContainer.css('marginBottom').replace('px', ''))
        - parseInt(resumeContainer.css('paddingTop').replace('px', ''))
        - parseInt(resumeContainer.css('paddingBottom').replace('px', '')));
};

$(document).ready(function () {
    changeResumeDimensions();
   $(window).resize(function () {
       changeResumeDimensions();
   })
});