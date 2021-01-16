var arrLang = {
    'en': {
        //header
      'home': 'Home',
      'about': 'About Us',
      'contact': 'Contact Us',
      'category': 'Category',
      "reg": 'Registration',
      "log-in": 'Log In',
        //registration
      "name" : 'Name',
      "surname": 'Surname',
      "password": 'Password',
      "show_psw": 'Show Password',
      "re_password": 'Re-Password',
      "phone": 'Phone',
      "country": 'Country',
      "city": 'City',
      "submit": 'Submit',
        //authorize
      "auth":'Authorization',
      "mail": 'Mail',
      "password": 'Password',
      "save": 'Save',
        //category
      "book_list1": "Education",
      "book_list2": "Biography",
      "book_list3": "Poetry",
    },
    'ge': {
        //header
      'home': 'მთავარი',
      'about': 'ჩვენს შესახებ',
      'contact': 'კონტაქტი',
      'category': 'კატეგორია',
        //registration
      "name" : 'სახელი',
      "reg": 'რეგისტრაცია',
      "log-in": 'შესვლა',
      "name" : 'სახელი',
      "surname": 'გვარი',
      "password": 'პაროლი',
      "show_psw": 'პაროლის ჩვენება',
      "re_password": 'გაიმეორეთ პაროლი',
      "phone": 'ტელეფონი',
      "country": 'ქვეყანა',
      "city": 'ქალაქი',
      "submit": 'შესვლა',
        //authorize
        "auth":'ავტორიზაცია',
        "mail": 'ელ.ფოსტა',
        "password": 'პაროლი',
        "save": 'დამახსოვრება',
        //category
      "book_list1": "საგანმანათლებლო",
      "book_list2": "ბიოგრაფიული",
      "book_list3": "პოეზია",
    }
  };
  $(function() {
    $('.translate').click(function() {
      var lang = $(this).attr('id');
      $('.lang').each(function(index, item) {
        $(this).text(arrLang[lang][$(this).attr('key')]);
      });
  
      $('.lang_placeholder').each(function(index, item) {
        $(this).attr("placeholder", arrLang[lang][$(this).attr('key')]);
      });
    });
  });