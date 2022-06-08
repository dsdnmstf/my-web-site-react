import React from "react";

const FooterHorizontal = () => {
  return (
    <footer class="horizontal">
      <div class="social-icons">
        <a href="https://twitter.com/" target="_blank">
          <i class="twitter fab fa-twitter fa-2x"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/mustafa-dasdan-a83152224/"
          target="_blank"
        >
          <i class="linkedin fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <i class="instagram fab fa-instagram fa-2x"></i>
        </a>
        <a href="https://github.com/dsdnmstf" target="_blank">
          <i class="github fab fa-github fa-2x"></i>
        </a>
      </div>
      <div class="copyright">&copy; Copyright 2022</div>
    </footer>
  );
};

export default FooterHorizontal;
