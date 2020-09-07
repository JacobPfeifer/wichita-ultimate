---
layout: layouts/base.njk
section: pickup
permalink: /pickup/addgame/index.html
---
<section class="container">
  <h2>Submit new game or edit existing game</h2>
  <form class="" name="contact" method="POST" netlify>
    <div class="relative h-16 my-4 rounded-md box-border border border-solid border-secondary bg-white">
      <input 
        class="absolute top-0 left-0 mt-8 pl-2 w-full focus:outline-none shadow-none bg-transparent" 
        type="text" 
        name="name" 
        id="name" 
        autocomplete="name" 
        placeholder="Your name" 
        title="Please enter your name" required>
      <label 
        class="absolute top-0 left-0 pt-2 pl-2 text-xs text-secondary"
        for="name"
        >Name
      </label>
    </div>
    <div class="relative h-16 my-4 rounded-md box-border border border-solid border-secondary bg-white">
      <input
        class="absolute top-0 left-0 mt-8 pl-2 w-full focus:outline-none shadow-none bg-transparent"
        type="email"
        name="email"
        id="email"
        autocomplete="email"
        placeholder="Your email address"
        title="The domain portion of the email address is invalid (the portion after the @)."
        pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$" 
        required>
      <label
        class="absolute top-0 left-0 pt-2 pl-2 text-xs text-secondary"
        for="email"
        >Email
      </label>
    </div>
    <div class="relative h-16 my-4 rounded-md box-border border border-solid border-secondary bg-white">
      <input 
        class="absolute top-0 left-0 mt-8 pl-2 w-full focus:outline-none shadow-none bg-transparent"
        type="text"
        id="title"
        placeholder="Title of your pickup game"
        title="Please enter a title"
        required>
      </input>
      <label 
        class="absolute top-0 left-0 pt-2 pl-2 text-xs text-secondary"
        for="title"
        >Title
      </label>
    </div>
    <div class="relative h-16 my-4 rounded-md box-border border border-solid border-secondary bg-white">
      <input
        class="absolute top-0 left-0 mt-8 pl-2 w-full focus:outline-none shadow-none bg-transparent"
        type="text"
        name="address"
        id="address"
        placeholder="Address where your game takes place"
        title="Please enter an adress"
        required>
      </input>
      <label 
        class="absolute top-0 left-0 pt-2 pl-2 text-xs text-secondary"
        for="address"
        >Address
      </label>
    </div>
    <div class="relative h-16 my-4 rounded-md box-border border border-solid border-secondary bg-white">
      <input
        class="absolute top-0 left-0 mt-8 pl-2 w-full focus:outline-none shadow-none bg-transparent"
        type="text"
        name="frequency"
        id="frequency"
        placeholder="How often you play and what time your game starts" title="i.e Wednesdays at 3pm"
        required>
      </input> 
      <label
        class="absolute top-0 left-0 pt-2 pl-2 text-xs text-secondary"
        for="frequency"
        >Frequency
      </label> 
    </div>
    <div class="relative h-16 my-4 rounded-md box-border border border-solid border-secondary bg-white">
      <input
        class="absolute top-0 left-0 mt-8 pl-2 w-full focus:outline-none shadow-none bg-transparent"
        type="text"
        name="discussion"
        id="discussion"
        placeholder="Link to where you discuss and organize"
        title="i.e Wednesdays at 3pm"
        required>
      </input>
      <label
        class="absolute top-0 left-0 pt-2 pl-2 text-xs text-secondary"
        for="discussion"
        >Discussion
      </label>  
    </div>
    <div class="relative h-16 my-4 rounded-md box-border border border-solid border-secondary bg-white">
      <textarea
        class="absolute top-0 left-0 mt-8 pl-2 w-full focus:outline-none shadow-none bg-transparent"
        name="body"
        id="body"
        placeholder="Describe your game here"
        rows="7"
        required>
      </textarea>
      <label
        class="absolute top-0 left-0 pt-2 pl-2 text-xs text-secondary"
        for="body"
        >Description
      </label>
    </div>
    <button
      class="px-12 py-2 bg-primary text-quinary rounded-md shadow-md"
      type="submit"
      name="submit"
      >Submit Pickup Game
    </button>
  </form>
</section>

