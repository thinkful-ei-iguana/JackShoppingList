/* eslint-disable no-console */
/* eslint-disable no-undef */
'use strict';
$(function() {
  //look at the top line and add any new items when the 'add item' button is submitted'
  /*$('form').submit(e =>{
    console.log('hello... 2');
    console.log(e.currentTarget.find('input'));
  });*/

  $('form').submit(e =>{
    e.preventDefault();
    let newItem = $(e.currentTarget).find('#shopping-list-entry').val();
    let newCheckBox = `<li>
    <span class="shopping-item">${newItem}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`;
    $('ul').append(newCheckBox);
  });


  //check and uncheck items 
  //listen for the "shopping-item-toggle" button to be pressed
  //if "shopping-item-toggle" is pressed, look at the item's class and change between "shopping item" and "shopping-item shopping-item__checked"
  $('ul').on('click', '.shopping-item-toggle', e =>{
    e.preventDefault();
    let toggle = $(e.currentTarget).parent().siblings();
    if(toggle.attr('class') === 'shopping-item'){
      toggle.attr('class', 'shopping-item shopping-item__checked');
    } else {
      toggle.attr('class', 'shopping-item');
    }
  });

  //remove items from the list
  //listen for the "shopping-item-delete" button to be pressed
  //using element.remove() on the li in order to remove the entire item and everything inside of it
  $('ul').on('click', '.shopping-item-delete', e =>{
    e.preventDefault();
    $(e.currentTarget).parent().parent().remove();
  });
});
