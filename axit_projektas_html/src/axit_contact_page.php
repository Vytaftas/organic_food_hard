 <!-- SECTION: CONTACT PAGE -->
 <div class="section contact-page">
      <!-- Main Text -->
      <div class="contact-page-text">
        <h5>CONTACT US</h5>
        <div class="border-orange"></div>
        <span class="span-text"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span
        >
      </div>
      <!-- Form -->
      <div class="contact-page-form">
        <form id="contact" action="index.php" method="post">

        <div class="form-container">
          <!-- Left -->
          <div class="input-left">
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="text" name="subject" placeholder="Subject" required />
          </div>
          <!-- Right -->
          <div class="input-right">
            <textarea name="message" placeholder="Message" rows="9" required></textarea>
          </div>
          </div>
        <input type="submit" value="Send Message" name="submit" id="contact-submit" />
        </form>
      </div>
    </div>