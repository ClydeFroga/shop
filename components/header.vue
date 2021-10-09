<template>
  <section class="header">
    <div class="header__left">
      <svg-icon width="21" height="16" name="mail"></svg-icon>
      <svg-icon width="19" height="20" name="calendar"></svg-icon>
      <svg-icon width="21" height="19" class="star orange" name="star"></svg-icon>
    </div>
    <div class="header__right">
      <svg-icon width="19" height="20" name="bell"></svg-icon>
      <svg-icon width="19" height="18" name="search"></svg-icon>
      <div class="header__rightUser">
        <div class="header__rightUserInfo">
            <span class="header__rightUserInfoName">
              John Doe
            </span>
            <span class="header__rightUserInfoAvailable">
              Available
            </span>
        </div>
        <img src="@/assets/img/face.png">
      </div>
    </div>
  </section>
</template>

<script>
export default {
name: "header"
}
</script>
