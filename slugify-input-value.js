$(document).ready(function() {
  // Define a slugify function
  function slugify(text) {
    return text.toString().toLowerCase()
      .replace(/[^\w\s-]+/g, '')      // Remove all non-word chars except spaces and hyphens
      .replace(/[\s]+/g, '-');        // Replace spaces with -
  }

  // Attach a keyup event to the input fields where suite-form starts with 'slugify'
  $('input[suite-form^="slugify"]').keyup(function() {
    var text = $(this).val();         // Get the current value
    var slug = slugify(text);         // Slugify the value
    // Update the input field you're currently typing in
    $(this).val(slug);
  });
});
