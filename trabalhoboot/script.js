
  $(document).ready(function () {
    // Adicionar Contato
    $('#addContactForm').submit(function (e) {
      e.preventDefault();

      var name = $('#name').val();
      var phone = $('#phone').val();

      if (name && phone) {
        // Obter a lista atual de contatos do localStorage
        var contacts = JSON.parse(localStorage.getItem('contacts')) || [];

        // Adicionar novo contato à lista
        contacts.push({ name: name, phone: phone });

        // Salvar a lista atualizada no localStorage
        localStorage.setItem('contacts', JSON.stringify(contacts));

        // Limpar campos do formulário
        $('#name').val('');
        $('#phone').val('');

        // Atualizar a lista de contatos exibida na página
        displayContacts();
      }
    });

    // Exibir Contatos
    function displayContacts() {
      var contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      var contactList = $('#contactList');

      // Limpar lista atual
      contactList.empty();

      // Adicionar cada contato à lista
      contacts.forEach(function (contact, index) {
        var listItem = $('<li class="list-group-item">').text(contact.name + ' - ' + contact.phone);

        // Adicionar botão de exclusão
        var deleteButton = $('<button class="btn btn-danger btn-sm float-right">Excluir</button>');
        deleteButton.click(function () {
          // Remover o contato da lista
          contacts.splice(index, 1);
          // Atualizar a lista no localStorage
          localStorage.setItem('contacts', JSON.stringify(contacts));
          // Atualizar a lista exibida na página
          displayContacts();
        });

        listItem.append(deleteButton);
        contactList.append(listItem);
      });
    }

    // Exibir contatos iniciais ao carregar a página
    displayContacts();
  });
