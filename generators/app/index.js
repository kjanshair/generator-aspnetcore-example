var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    this.log(yosay('Allo, I\'ll generate a basic ASP.NET Core application created by Janshair Khan.'));

    var prompts = [{
      type: 'input',
      name: 'myApp',
      message: 'What should be your app name?',
      default: 'App'
    }];

    return this.prompt(prompts).then(function (props) {
      this.appName = props.myApp;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    //MVC Controllers
    this.copy('Controllers/_AccountController.cs', this.appName + '/Controllers/AccountController.cs');
    this.copy('Controllers/_HomeController.cs', this.appName + '/Controllers/HomeController.cs');
    
    //Data
    this.copy('Data/_ApplicationDbContext.cs', this.appName + '/Data/ApplicationDbContext.cs');

    //MVC Models
    this.copy('Models/AccountViewModels/_LoginViewModel.cs', this.appName + '/Models/AccountViewModels/LoginViewModel.cs');
    this.copy('Models/AccountViewModels/_RegisterViewModel.cs', this.appName + '/Models/AccountViewModels/RegisterViewModel.cs');
    this.copy('Models/_ApplicationUser.cs', this.appName + '/Models/ApplicationUser.cs');

    //launch settings
    this.copy('Properties/_launchSettings.json', this.appName + '/Properties/launchSettings.json');

    //MVC Views
    this.copy('Views/Account/_Login.cshtml', this.appName + '/Views/Account/Login.cshtml');
    this.copy('Views/Account/_Register.cshtml', this.appName + '/Views/Account/Register.cshtml');

    this.copy('Views/Home/_Index.cshtml', this.appName + '/Views/Home/Index.cshtml');
    this.copy('Views/Home/_About.cshtml', this.appName + '/Views/Home/About.cshtml');
    this.copy('Views/Home/_Contact.cshtml', this.appName + '/Views/Home/Contact.cshtml');
    this.copy('Views/Home/_Protected.cshtml', this.appName + '/Views/Home/Protected.cshtml');
    this.copy('Views/Shared/_Error.cshtml', this.appName + '/Views/Shared/Error.cshtml');

    this.copy('Views/Shared/__Layout.cshtml', this.appName + '/Views/Shared/_Layout.cshtml');
    this.copy('Views/Shared/__LoginPartial.cshtml', this.appName + '/Views/Shared/_LoginPartial.cshtml');
    this.copy('Views/Shared/__ValidationScriptsPartial.cshtml', this.appName + '/Views/Shared/_ValidationScriptsPartial.cshtml');

    this.copy('Views/__ViewImports.cshtml', this.appName + '/Views/_ViewImports.cshtml');
    this.copy('Views/__ViewStart.cshtml', this.appName + '/Views/_ViewStart.cshtml');

    //Web Root files
    this.copy('wwwroot/js/_site.js', this.appName + '/wwwroot/js/site.js');
    this.copy('wwwroot/_favicon.ico', this.appName + '/wwwroot/favicon.ico');

    this.copy('wwwroot/css/_site.css', this.appName + '/wwwroot/css/site.css');
    this.copy('wwwroot/css/_bootstrap.min.css', this.appName + '/wwwroot/css/bootstrap.min.css');

    //Project root files
    this.copy('bowerrc', this.appName + '/.bowerrc');
    this.copy('gitattributes', this.appName + '/.gitattributes');
    this.copy('gitignore', this.appName + '/.gitignore');
    this.copy('_bower.json', this.appName + '/bower.json');

    this.copy('_appsettings.json', this.appName + '/appsettings.json');
    this.copy('_Program.cs', this.appName + '/Program.cs');

    this.copy('_project.json', this.appName + '/project.json');

    this.copy('_Startup.cs', this.appName + '/Startup.cs');
    this.copy('_web.config', this.appName + '/web.config');
  },

  install: function () {
    var npmdir = process.cwd() + '/' + this.appName;
    process.chdir(npmdir);
    this.bowerInstall();
  }
});
