<form id = 'signup-form' action="/signup" method="POST">
    <div>sign up</div>
  <div>
    <label for="id">id</label>
    <input type="text" id="id" name="id" required />
  </div>

  <div>
    <label for="password">password</label>
    <input type="password" id="password" name="password" required/>
  </div>

  <div>
    <label for="password2">comfirm password</label>
    <input type="password" id="password2" name="password2" required/>
  </div>

  <div>
    <label for="name">name</label>
    <input type="text" id="name" name="name" required/>
  </div>

  <div>
    <label for="email">email</label>
    <input type="email" id="email" name="email" required/>
  </div>

  <div>
    <button type="submit">Sign up</button>
  </div>

  <div id="info"></div>


</form>