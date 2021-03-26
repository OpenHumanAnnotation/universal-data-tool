function e(e) {
  return e && e.__esModule ? e.default : e
}
var t = e(require("@material-ui/icons/ThreeDRotation")),
  o = e(require("@material-ui/icons/Help")),
  n = e(require("@material-ui/icons/Audiotrack")),
  a = e(require("@material-ui/icons/Edit")),
  i = e(require("@material-ui/icons/TextFormat")),
  r = e(require("@material-ui/icons/RemoveRedEye")),
  l = e(require("@babel/runtime/helpers/esm/defineProperty")),
  s = e(require("@material-ui/core/Typography")),
  d = e(require("lodash/range")),
  c = e(require("@material-ui/core/ListSubheader")),
  u = e(require("@material-ui/core/ListItemText")),
  m = e(require("@material-ui/core/ListItemIcon")),
  p = e(require("@material-ui/core/ListItem")),
  g = e(require("@material-ui/core/List")),
  f = e(require("@material-ui/core/Drawer")),
  v = e(require("@material-ui/icons/CheckCircle")),
  h = e(require("@material-ui/icons/RadioButtonUnchecked")),
  x = e(require("@material-ui/icons/KeyboardArrowLeft")),
  b = e(require("@material-ui/icons/KeyboardArrowRight")),
  y = e(require("react-markdown")),
  w = e(require("@material-ui/core/Grid")),
  k = require("@material-ui/core").makeStyles,
  E = e(require("material-survey/components/Survey")),
  S = e(require("react-time-series")),
  T = e(require("@material-ui/icons/Delete")),
  C = e(require("react-material-workspace-layout/Workspace")),
  I = e(require("lodash/without")),
  D = e(require("@material-ui/core/Checkbox")),
  A = e(require("@material-ui/core/Button")),
  j = e(require("use-event-callback")),
  q = e(require("react-image-annotate")),
  N = e(require("@babel/runtime/helpers/esm/slicedToArray")),
  L = e(require("@babel/runtime/helpers/esm/createForOfIteratorHelper")),
  P = e(require("@babel/runtime/helpers/esm/toConsumableArray")),
  R = e(require("@material-ui/core/Box")),
  U = e(require("react-nlp-annotate")),
  M = e(require("i18next-browser-languagedetector")),
  O = require("react-i18next"),
  z = O.initReactI18next,
  H = O.useTranslation,
  B = e(require("i18next")),
  _ = require("@material-ui/core/colors"),
  V = _.blue,
  F = _.green,
  G = _.red,
  W = _.deepOrange,
  J = _.pink,
  K = _.teal,
  Y = _.deepPurple,
  Q = _.indigo,
  X = _.cyan,
  Z = _.purple,
  $ = _.grey,
  ee = require("@material-ui/core/styles"),
  te = ee.ThemeProvider,
  oe = ee.styled,
  ne = ee.makeStyles,
  ae = e(require("@material-ui/core/styles/createMuiTheme")),
  ie = e(require("react-dom")),
  re = require("react"),
  le = e(re),
  se = re.useMemo,
  de = re.useState,
  ce = re.useEffect,
  ue = e(require("@babel/runtime/helpers/esm/objectWithoutProperties")),
  me = e(require("@babel/runtime/helpers/esm/objectSpread2"))
require("./main.css")
var pe = ae({
    palette: { primary: V, secondary: V },
    typography: {
      fontFamily: '"Inter", "Roboto", sans-serif',
      button: { textTransform: "none" },
    },
  }),
  ge = function (e) {
    var t = e.children
    return le.createElement(te, { theme: pe }, t)
  },
  fe = e(
    JSON.parse(
      '{"starting-page-download-version":"Download Version","download":"Download","download-json":"Download JSON","download-csv":"Download CSV","universaldatatool-description":"Open-Source Data Labeling tool","new-file":"New File","start-from-template":"Start from Template","open-file":"Open File","open-collaborative-session":"Open Collaborative Session","add-authentication":"Add Authentification","create-training-course":"Create a Training Course","no-recent-files":"No Recent Files","downloading-and-installing-udt":"Downloading and Installing UDT","labeling-images":"Labeling Images","start-page-about-first-paragraph":"The Universal Data Tool (UDT) is an open-source web or downloadable tool for labeling data for usage in machine learning or data processing systems.","start-page-about-second-paragraph":"The Universal Data Tool supports Computer Vision, Natural Language Processing (including Named Entity Recognition and Audio Transcription) workflows.","the-udt-uses-an":"The UDT uses an","start-page-about-third-paragraph":"that can be easily read by programs as a ground-truth dataset for machine learning algorithms.","open-a-template":"Open a template","to-see-how-the-udt-could-work-for-your-data":"to see how the UDT could work for your data.","edit-json":"Edit JSON","clear-labels":"Clear All Labels","telemetry":"Telemetry","custom-collaboration-server":"Custom Collaboration Server","label-help":"Label Help","label-help-api-key":"Label Help API Key","an-error-has-occurred":"An error has occurred","sample-brushes":"Sample Brushes","complete":"Complete","review":"Review","collaborate":"Collaborate","join-a-session":"Join a Session","leave-session":"Leave Session","next":"Next","configure-3d-explanation-text-part-1":"Hey, this isn\'t currently available, but if you\'d like this functionality please let us know by leaving a thumbs up on","github-issue":"github issue","add-new-field":"Add New Field","remove-field":"Remove Field","preview":"Preview","add-input":"Add Input","text-input":"Text Input","exclusive-choice":"Exclusive Choice","drop-down-autocomplete":"Dropdown / Autocomplete","multiple-item-dropdown-autocomplete":"Multiple Item Dropdown / Autocomplete","download-urls-dialog":"This transformation will download all the urls from your samples to your computer, and change the paths to filenames. This is usually not a good idea if you\'re collaborating with others, but is very useful if you\'re about to build a model.","no-recent-items":"No Recent Items","explore-more":"Explore More","reopen-google-drive-picker":"Reopen Google Drive Picker","import-from-google-drive-explanation-text":"Make sure your Google Drive files are available via a link","import-from-google-drive-explanation-bold-text":"If you don\'t, the files will not appear when you\'re labeling","select-video-quality":"Select Video Quality","desktop-only":"Desktop Only","auth-must-be-configured":"Auth Must Be Configured","must-be-signed-in":"Must Be Signed In","paste-urls":"Paste URLs","files-from-directory":"Files from Directory","import-text-snippets":"Import Text Snippets","import-toy-dataset":"Import Toy Dataset","import-from":"Import from","import-from-cognito-s3":"Import from S3 (Cognito)","export-to-cognito-s3":"Export to S3 (Cognito)","import-from-s3":"Import from S3 (IAM)","upload-to-s3":"Upload via S3","name":"Name","type":"Type","size":"Size","actions":"Actions","import":"Import","sign-in":"Sign in","complete-sign-up":"Complete Sign Up","complete-your-sign-up":"Complete your Sign Up","transform-local-files-to-web-urls-explanation":"This transformation will upload your local samples to the cloud Note: This can take a little while.","convert-video-keyframes-to-samples":"Convert Video Keyframes to Samples","transform-local-files-to-web-urls":"Transform Local Files to Web URLs","convert-video-frames-to-images":"Convert Video Frames to Images","transform-video-frames-to-images-dialog-explanation-text":"This transformation will convert samples that reference a video frame into an image. This is a useful step before creating a model. You can only convert videos that are downloaded on your computer. Note: This can take a little while.","transform-video-keyframes-dialog-explanation-text":"This operation will convert keyframes set on a video into individual image segmentation frames. Your interface type will change from \'video_segmentation\' into \'image_segmentation\'. This is sometimes helpful when preparing video data for a computer vision model.","transform-video-keyframes-dialog-explanation-warning":"You need to label some keyframes to use this.","universal-data-viewer-interface-warning":"This interface hasn\'t been set up properly, try selecting an interface in the \'Setup\' tab.","setup-project":"Setup Project","other-formats":"Other Formats","import-from-coco":"Import from COCO","remember-me":"Remember me","login-with":"Login with","about":"About","start":"Start","recent":"Recent","help":"Help","github-repository":"Github repository","youtube-channel":"Youtube channel","logout":"Logout","username":"Username","password":"Password","star":"Star","check-this-wiki":"Check this wiki","guide-to-set-up-cognito":"guide for setting up AWS Cognito with the Universal Data Tool","close":"Close","project-name":"Project Name","projects":"Projects","export-project":"Export Project","create-project":"Create Project","warning-project-exist":"Warning : This project name already exist. If you continue the \\n existing project with the same name will be replaced","has-samples-folder":"Make sure the project has \\"samples\\" folder","annotations":"Annotations","last-modified":"Last Modified","select-project":"Select Project","take-samples-from-project":"Take samples from project","annotation-processing":"Annotation Processing","keep-both-annotations":"Keep both annotations","keep-incoming-annotations":"Keep incoming annotations","keep-current-annotations":"Keep current annotations","choose-file-type":"Choose file type","load-image-file":"Load image file","load-pdf-file":"Load PDF file","load-text-file":"Load text file","load-audio-file":"Load audio file","load-video-file":"Load video file","assets":"Assets","has-data-folder":"Make sure the project has \\"data\\" folder","load-assets":"Load Assets","load-annotations":"Load Annotations"}'
    )
  ),
  ve = e(
    JSON.parse(
      '{"starting-page-download-version":"Version à télécharger","download":"Télécharger","universaldatatool-description":"Outil d\'étiquetage des données open source","new-file":"Nouveau dossier","start-from-template":"Partir du modèle","open-file":"Dossier public","open-collaborative-session":"Session de collaboration ouverte","add-authentication":"Ajouter l\'authentification","create-training-course":"Créer un cours de formation","no-recent-files":"Aucun dossier récent","downloading-and-installing-udt":"Téléchargement et installation d\'UDT","labeling-images":"Étiquetage des images","start-page-about-first-paragraph":"Universal Data Tool (UDT) est un outil web ou téléchargeable à code open source pour l\'étiquetage des données destinées à être utilisées dans l\'apprentissage machine ou les systèmes de traitement des données.","start-page-about-second-paragraph":"UDT prend en charge les flux de travail de la vision par ordinateur, du traitement du langage naturel (y compris la reconnaissance d\'entités nommées et la transcription audio).","the-udt-uses-an":"UDT utilise un","start-page-about-third-paragraph":"qui peut être facilement lu par les programmes comme un ensemble de données de base pour les algorithmes d\'apprentissage machine.","open-a-template":"Ouvrir un modèle","to-see-how-the-udt-could-work-for-your-data":"pour voir comment l\'UDT pourrait fonctionner pour vos données.","edit-json":"Modifier JSON","clear-labels":"Effacer tous les labels","telemetry":"Télémétrie","custom-collaboration-server":"Serveur de collaboration personnalisée","label-help":"Label Help","label-help-api-key":"Label Help API Clé","an-error-has-occurred":"Une erreur s\'est produite","sample-brushes":"Brosses à échantillons","complete":"Compléter","review":"Revue","collaborate":"Collaborer","join-a-session":"Participer à une session","leave-session":"Séance de congé","next":"Suivant","configure-3d-explanation-text-part-1":"Hey, ce n\'est pas disponible actuellement, mais si vous souhaitez bénéficier de cette fonctionnalité, veuillez nous le faire savoir en laissant un avis sur","github-issue":"numéro de github","add-new-field":"Ajouter un nouveau champ","remove-field":"Supprimer un champ","preview":"Aperçu","add-input":"Ajouter une entrée","text-input":"Saisie de texte","exclusive-choice":"Choix exclusif","drop-down-autocomplete":"Dropdown / Autocomplete","multiple-item-dropdown-autocomplete":"Éléments multiples Dropdown / Autocomplete","download-urls-dialog":"Cette transformation téléchargera toutes les urls de vos échantillons sur votre ordinateur, et modifiera les chemins d\'accès aux noms de fichiers. Ce n\'est généralement pas une bonne idée si vous collaborez avec d\'autres personnes, mais c\'est très utile si vous êtes sur le point de construire un modèle.","no-recent-items":"Pas d\'articles récents","explore-more":"En savoir plus","reopen-google-drive-picker":"Réouvrir Google Drive Picker","import-from-google-drive-explanation-text":"Assurez-vous que vos fichiers Google Drive sont disponibles via un lien","import-from-google-drive-explanation-bold-text":"Si vous ne le faites pas, les dossiers n\'apparaîtront pas lorsque vous étiqueterez","select-video-quality":"Choisir la qualité vidéo","desktop-only":"Bureau uniquement","auth-must-be-configured":"L\'authentification doit être configurée","must-be-signed-in":"Doit être authentifié","paste-urls":"Coller les URL","files-from-directory":"Fichiers du répertoire","import-text-snippets":"Importer des bribes de texte","import-toy-dataset":"Import Toy Dataset","import-from":"Importation de","import-from-cognito-s3":"Importer de S3 (Cognito)","export-to-cognito-s3":"Exporter vers S3 (Cognito)","import-from-s3":"Importer de S3 (IAM)","upload-to-s3":"Exporter vers S3","name":"Nom","type":"Tapez","size":"Taille","actions":"Actions","import":"Importer","sign-in":"Se connecter","complete-sign-up":"Compléter l\'inscription","complete-your-sign-up":"Complétez votre inscription","transform-local-files-to-web-urls-explanation":"Cette transformation téléchargera vos échantillons locaux dans le nuage Remarque : Cela peut prendre un certain temps.","convert-video-keyframes-to-samples":"Convertir des images clés vidéo en échantillons","transform-local-files-to-web-urls":"Transformer les fichiers locaux en URL Web","convert-video-frames-to-images":"Convertir des images vidéo en images","transform-video-frames-to-images-dialog-explanation-text":"Cette transformation convertira en image les échantillons qui font référence à une trame vidéo. C\'est une étape utile avant de créer un modèle. Vous ne pouvez convertir que les vidéos qui sont téléchargées sur votre ordinateur. Note : Cela peut prendre un peu de temps.","transform-video-keyframes-dialog-explanation-text":"Cette opération permettra de convertir les images clés d\'une vidéo en images individuelles de segmentation d\'images. Votre type d\'interface passera de \'video_segmentation\' à \'image_segmentation\'. Cette opération est parfois utile lors de la préparation des données vidéo pour un modèle de vision par ordinateur.","transform-video-keyframes-dialog-explanation-warning":"Pour l\'utiliser, vous devez étiqueter certaines images clés.","universal-data-viewer-interface-warning":"Cette interface n\'a pas été configurée correctement, essayez de sélectionner une interface dans l\'onglet \'Configuration\'.","setup-project":"Projet de mise en place","remember-me":"Se souvenir de moi","login-with":"Authentifier avec","about":"À propos","start":"Commencer","recent":"Récent","help":"Aide","github-repository":"Dépôt Github","youtube-channel":"Chaîne Youtube","logout":"Déconnexion","username":"Nom d\'utilisateur","password":"Mot de passe","star":"Étoile","check-this-wiki":"Voyez ce","guide-to-set-up-cognito":"guide pour configurer AWS Cognito avec Universal Data Tool","close":"Fermer","project-name":"Nom du projet","projects":"Projets","export-project":"Exporter un projet","create-project":"Créer un projet","warning-project-exist":"Avertissement : Le nom de ce projet est préexistant. Si vous continuer, \\n le projet existant sera remplacé.","has-samples-folder":"Assurez-vous que le projet a un répertoire \\"samples\\"","annotations":"Annotations","last-modified":"Dernière modification","select-project":"Sélectionner un projet","take-samples-from-project":"Prendre les échantillons du projet","annotation-processing":"Gestion des annotations","keep-both-annotations":"Garder tous types d\'annotations","keep-incoming-annotations":"Garder les nouvelles annotations","keep-current-annotations":"Garder les anciennes annotations","choose-file-type":"Choisir le type de fichier de données","load-image-file":"Télécharger les fichiers d\'images","load-pdf-file":"Télécharger les fichiers PDFs","load-text-file":"Télécharger les fichiers textes","load-audio-file":"Télécharger les fichiers audio","load-video-file":"Télécharger les fichiers vidéo","assets":"Fichiers de données","has-data-folder":"Assurez-vous que le projet a un répertoire \\"data\\"","load-assets":"Charger les fichiers de données","load-annotations":"Charger les annotations"}'
    )
  ),
  he = e(
    JSON.parse(
      '{"starting-page-download-version":"下载版本","download":"下载中心","universaldatatool-description":"开源数据标签","new-file":"新文件","start-from-template":"从模板开始","open-file":"打开文件","open-collaborative-session":"公开合作会议","add-authentication":"添加认证","create-training-course":"创建培训课程","no-recent-files":"最近没有文件","downloading-and-installing-udt":"下载和安装UDT","labeling-images":"标签图片","start-page-about-first-paragraph":"通用数据工具(UDT)是一个开源的网络或可下载的工具，用于标记数据，以便在机器学习或数据处理系统中使用。","start-page-about-second-paragraph":"通用数据工具支持计算机视觉、自然语言处理（包括命名实体识别和音频转录）工作流程。","the-udt-uses-an":"UDT使用的是","start-page-about-third-paragraph":"可以很容易地被程序读取，作为机器学习算法的地真数据集。","open-a-template":"打开一个模板","to-see-how-the-udt-could-work-for-your-data":"看看UDT如何为您的数据工作。","edit-json":"编辑JSON","clear-labels":"Clear All Labels","telemetry":"遥测","custom-collaboration-server":"自定义协作服务器","label-help":"标签帮助","label-help-api-key":"标签帮助 API 密钥","an-error-has-occurred":"发生了一个错误","sample-brushes":"刷子样品","complete":"完整","review":"回顾","collaborate":"协作","join-a-session":"加入会议","leave-session":"休会","next":"下一个","configure-3d-explanation-text-part-1":"嘿，这是不是目前可用，但如果你想这个功能，请让我们知道，留下大拇指上的","github-issue":"github问题","add-new-field":"添加新领域","remove-field":"移除字段","preview":"Preview","add-input":"添加输入","text-input":"文本输入","exclusive-choice":"独家选择","drop-down-autocomplete":"下拉式/自动完成","multiple-item-dropdown-autocomplete":"多个项目下拉/自动完成","download-urls-dialog":"这个转换会将所有的URL从你的样本下载到你的电脑，并将路径改为文件名。如果您正在与他人合作，这通常不是一个好主意，但如果您要建立一个模型，这非常有用。","no-recent-items":"最近没有项目","explore-more":"探索更多","reopen-google-drive-picker":"重新打开Google Drive Picker","import-from-google-drive-explanation-text":"确保你的Google Drive文件可以通过链接获得。","import-from-google-drive-explanation-bold-text":"如果你不这样做，当你在标注时，文件将不会出现","select-video-quality":"选择视频质量","desktop-only":"仅限桌面","auth-must-be-configured":"必须配置Auth","must-be-signed-in":"必须签到","paste-urls":"粘贴URL","files-from-directory":"文件从目录","import-text-snippets":"导入文本片段","import-toy-dataset":"导入玩具数据集","import-from":"进口自","name":"名称","type":"种类","size":"尺寸","actions":"行动","import":"进口","sign-in":"登录","complete-sign-up":"完成注册","complete-your-sign-up":"完成您的注册","transform-local-files-to-web-urls-explanation":"此转换将把您的本地样本上传到云端 注意：这可能需要一点时间。","convert-video-keyframes-to-samples":"将视频关键帧转换为样本","transform-local-files-to-web-urls":"将本地文件转换为Web URL","convert-video-frames-to-images":"将视频帧转换为图像","transform-video-frames-to-images-dialog-explanation-text":"此转换将参考视频帧的样本转换为图像。这是创建模型之前的一个有用步骤。您只能转换下载到计算机上的视频。注意：这可能需要一点时间。","transform-video-keyframes-dialog-explanation-text":"此操作将把视频上设置的关键帧转换为单个图像分割帧。你的接口类型将从 \'video_segmentation \'变为 \'image_segmentation\'。这在为计算机视觉模型准备视频数据时有时会有帮助。","transform-video-keyframes-dialog-explanation-warning":"你需要给一些关键帧贴上标签才能使用。","universal-data-viewer-interface-warning":"这个接口没有正确设置，请尝试在 \'设置 \'选项卡中选择一个接口。","setup-project":"设置项目"}'
    )
  ),
  xe = e(
    JSON.parse(
      '{"starting-page-download-version":"Baixar Versão","download":"Baixar","download-json":"Baixar JSON","download-csv":"Baixar CSV","universaldatatool-description":"Rotulador de dados de código aberto","new-file":"Novo arquivo","start-from-template":"Iniciar apartir de um modelo","open-file":"Abrir arquivo","open-collaborative-session":"Abrir sessão colaborativa","add-authentication":"Adicionar autenticação","create-training-course":"Criar um curso de treinamento","no-recent-files":"Sem arquivos recentes","downloading-and-installing-udt":"Baixando e instalando o UDT","labeling-images":"Rotulando imagens","start-page-about-first-paragraph":"O Universal Data Tool (UDT) é uma ferramenta web ou baixável de código aberto para rotulação de dados para uso em aprendizado de máquina ou em processamento de sistemas.","start-page-about-second-paragraph":"O Universal Data Tool tem suporte para visão computacional, fluxo de trabalho para processamento de linguagem natural (incluindo reconhecimento de entidade nomeada e transcrição de audio).","the-udt-uses-an":"O UDT usa uma","start-page-about-third-paragraph":"que pode ser facilmente lido por programas como um conjunto de dados verdadeiros para algoritmos de aprendizado de máquina.","open-a-template":"Abrir um modelo","to-see-how-the-udt-could-work-for-your-data":"para ver como o UDT pode trabalhar com seus dados.","edit-json":"Editar JSON","clear-labels":"Limpar todos os rótulos","telemetry":"Telemetria","custom-collaboration-server":"Servidor de colaboração personalizado","label-help":"Ajuda com Rótulo","label-help-api-key":"Ajudo com a chave da API do rótulo","an-error-has-occurred":"Ocorreu um erro","sample-brushes":"Pincéis de amostra","complete":"Completo","review":"Revisar","collaborate":"Colaborar","join-a-session":"Entrar em uma sessão","leave-session":"Sair da sessão","next":"Próximo","configure-3d-explanation-text-part-1":"Ei, isso ainda não está disponível, mas se você gostaria dessa funcionalidade for favor deixe nos saber deixando um gostei","github-issue":"Questão no GitHub","add-new-field":"Adicionar novo campo","remove-field":"Remover campo","preview":"Pré-visualizar","add-input":"Adicionar entrada","text-input":"Texto de entrada","exclusive-choice":"Escolha exclusiva","drop-down-autocomplete":"Drop-down / Auto completar","multiple-item-dropdown-autocomplete":"Drop-down vários itens / Auto completar","download-urls-dialog":"Essa transformação irá baixar todas urls de sua amostra para seu computador e muda o caminho de arquivos para nome de arquivo. Geralmente essa não é uma boa ideia caso você queria trabalhar em colaboração com outras pessoas, mas isso será muito útil se você quiser construir um modelo.","no-recent-items":"Sem itens recentes","explore-more":"Explorar mais","reopen-google-drive-picker":"Reabrir selecionador do Google drive","import-from-google-drive-explanation-text":"Tenha certeza que seus arquivos do google drive estão válidos através do link","import-from-google-drive-explanation-bold-text":"Se você achar melhor não, os arquivos não irão desaparecer quanto você fizer a rotulação","select-video-quality":"Selecione a qualidade de video","desktop-only":"Apenas para desktop","auth-must-be-configured":"Autenticação precisa ser configurada","must-be-signed-in":"Precisa estar logado","paste-urls":"Colar URLs","files-from-directory":"Arquivos de diretório","import-text-snippets":"Importar trechos de texto","import-toy-dataset":"Importar conjunto de dados de brinquedo","import-from":"Importar de","import-from-cognito-s3":"Importar do S3 (Cognito)","import-from-s3":"Importar do S3 (IAM)","upload-to-s3":"Enviar via S3","name":"Nome","type":"Tipo","size":"Tamanho","actions":"Ações","import":"Importar","sign-in":"Cadastrar","complete-sign-up":"Completar cadastro","complete-your-sign-up":"Complete seu cadastro","transform-local-files-to-web-urls-explanation":"Essa transformação irá enviar suas amostras locais para a nuvem. Aviso: Isso pode demorar um pouco.","convert-video-keyframes-to-samples":"Converter frames de video em amostras","transform-local-files-to-web-urls":"Transformar arquivos locais em web URLs","convert-video-frames-to-images":"Converter frames de video em imagens","transform-video-frames-to-images-dialog-explanation-text":"Essa trnasformação irá converter suas amostras que referenciam um frame de video em uma imagem. Isso pode ser útil para alguns passos anteriores à criação de modelo. Você pode apenas converter videos que estão baixados em seu computador. Aviso: Isso pode demorar um pouco.","transform-video-keyframes-dialog-explanation-text":"Essa operação irá converter os frames do video em uma imagem individual segmentada em frames. Seu tipo de interface irá mudar de \'video_segmentation\' para \'image_segmentation\'. As vezes isso é de grande ajuda para preparar seus dados de video para um modelo de visão computacional.","transform-video-keyframes-dialog-explanation-warning":"Você precisa rotular alguns frames para usar isso.","universal-data-viewer-interface-warning":"Essa interface não foi estabelecidade de forma apropriada, tente selecionar uma interface na aba de configuração.","setup-project":"Projeto de confuguração"}'
    )
  ),
  be = e(
    JSON.parse(
      '{"starting-page-download-version":"Download Versie","download":"Download","download-json":"Download JSON","download-csv":"Download CSV","universaldatatool-description":"Open-Source Data Labelen","new-file":"Nieuw Bestand","start-from-template":"Gebruik Template","open-file":"Open Bestand","open-collaborative-session":"Open Samenwerkingssessie","add-authentication":"Authenticatie Toevoegen","create-training-course":"Creëer een Cursus","no-recent-files":"Geen Recente Bestanden","downloading-and-installing-udt":"UDT Sownloaden en Installeren","labeling-images":"Afbeeldingen Labelen","start-page-about-first-paragraph":"De Universal Data Tool (UDT) is een open-source tool voor het labelen van gegevens voor gebruik in machine learning of gegevens verwerkingssystemen. De tool heeft zowel een dekstop als web app.","start-page-about-second-paragraph":"De Universal Data Tool ondersteunt Computer Vision, Natural Language Processing (inclusief \'Named Entity Recognition\' en \'Audio Transcription\') workflows.","the-udt-uses-an":"The UDT gebruikt een","start-page-about-third-paragraph":"die gemakkelijk door programma\'s kan worden gelezen als een controle dataset voor machine learning algoritmes.","open-a-template":"Open een Template","to-see-how-the-udt-could-work-for-your-data":"om te zien hoe de UDT werkt voor uw gegevens.","edit-json":"Bewerk JSON","clear-labels":"Wis Alle Labels","telemetry":"Telemetrie","custom-collaboration-server":"Aangepaste Samenwerkings Server","label-help":"Label Hulp","label-help-api-key":"Label Hulp API code","an-error-has-occurred":"Er is een fout opgetreden","sample-brushes":"Sample Brushes","complete":"Afronden","review":"Beoordelen","collaborate":"Samenwerken","join-a-session":"Neem deel aan een sessie","leave-session":"Verlaat Sessie","next":"Volgende","configure-3d-explanation-text-part-1":"Hé, dit is momenteel nog niet beschikbaar, maar als je deze functionaliteit wilt, laat het ons dan weten door op het duimpje omhoog te klikken","github-issue":"github issue","add-new-field":"Nieuw Veld Toevoegen","remove-field":"Veld Verwijderen","preview":"Voorbeeld","add-input":"Invoer Toevoegen","text-input":"Tekst Toevoegen","exclusive-choice":"Exclusieve Keuze","drop-down-autocomplete":"Dropdown Menu / Automatisch Aanvullen","multiple-item-dropdown-autocomplete":"Meerdere items Dropdown Menu / Automatisch Aanvullen","download-urls-dialog":"Deze transformatie downloadt alle URL\'s van uw samples naar uw computer en verandert de paden naar bestandsnamen. Dit is meestal geen goed idee als u met anderen samenwerkt, maar het is erg handig als u op het punt staat een model te bouwen.","no-recent-items":"Geen Recente Items","explore-more":"Meer Ontdekken","reopen-google-drive-picker":"Open Google Drive menu opnieuw","import-from-google-drive-explanation-text":"Zorg ervoor dat uw Google Drive-bestanden beschikbaar zijn via een link","import-from-google-drive-explanation-bold-text":"Als u dat niet doet, worden de bestanden niet weergegeven tijdens het labelen","select-video-quality":"Selecteer Videokwaliteit","desktop-only":"Alleen Bureaublad","auth-must-be-configured":"Authentificatie moet worden geconfigureerd","must-be-signed-in":"U moet eerst inloggen","paste-urls":"Plak URL\'s","files-from-directory":"Bestanden uit Directory","import-text-snippets":"Importeer Tekstfragmenten","import-toy-dataset":"Importeer Voorbeeld Dataset","import-from":"Importeren van","import-from-cognito-s3":"Importeren vanuit S3 (Cognito)","import-from-s3":"Importeren vanuit S3 (IAM)","upload-to-s3":"Uploaden via S3","name":"Naam","type":"Type","size":"Grootte","actions":"Acties","import":"Importeren","sign-in":"Inloggen","complete-sign-up":"Voltooi Registratie","complete-your-sign-up":"Voltooi uw Registratie","transform-local-files-to-web-urls-explanation":"Deze transformatie uploadt uw lokale samples naar de cloud. Opmerking: dit kan even duren.","convert-video-keyframes-to-samples":"Converteer video keyframes naar voorbeelden","transform-local-files-to-web-urls":"Transformeer lokale bestanden naar web-URL\'s","convert-video-frames-to-images":"Converteer videoframes naar afbeeldingen","transform-video-frames-to-images-dialog-explanation-text":"Deze transformatie converteert samples die naar een videoframe verwijzen naar een afbeelding. Dit is een handige stap voordat u een model maakt. U kunt alleen video\'s converteren die op uw computer zijn gedownload. Let op: dit kan even duren.","transform-video-keyframes-dialog-explanation-text":"Met deze bewerking worden keyframes die op een video zijn ingesteld, geconverteerd naar afzonderlijke beeldsegmentatieframes. Uw interfacetype verandert van \'video_segmentation\' in \'image_segmentation\'. Dit is soms handig bij het voorbereiden van videogegevens voor een computervisiemodel.","transform-video-keyframes-dialog-explanation-warning":"U moet een aantal keyframes labelen om dit te gebruiken.","universal-data-viewer-interface-warning":"Deze interface is niet goed ingesteld, probeer een interface te selecteren op het tabblad \'Instellingen\'.","setup-project":"Project Opzetten"}'
    )
  )
B.use(M)
  .use(z)
  .init({
    fallbackLng: "en",
    debug: !1,
    interpolation: { escapeValue: !1 },
    resources: {
      fr: { translation: ve },
      en: { translation: fe },
      cn: { translation: he },
      pt: { translation: xe },
      nl: { translation: be },
    },
  })
var ye = function (e) {
    var t = e.sample,
      o = e.interface,
      n = e.onExit,
      a = e.sampleIndex,
      i = e.onModifySample,
      r = e.disableHotkeys,
      l = (t || {}).annotation,
      s = void 0 === l ? null : l,
      d = s ? ("string" == typeof s ? [s] : s) : void 0
    if (!o.labels)
      throw new Error("Labels not defined. Try defining some labels in Setup")
    var c = o.labels
      .map(function (e) {
        return "string" == typeof e
          ? { id: e, description: e, displayName: e }
          : e
      })
      .map(function (e) {
        return e.displayName ? e : me(me({}, e), {}, { displayName: e.id })
      })
    return le.createElement(U, {
      key: a,
      type: "label-document",
      labels: c,
      multipleLabels: null == o ? void 0 : o.multiple,
      separatorRegex: null == o ? void 0 : o.wordSplitRegex,
      document: null == t ? void 0 : t.document,
      initialLabels: d,
      hotkeysEnabled: !r,
      onPrev: function (e) {
        i(me(me({}, t), {}, { annotation: e })), n("go-to-previous")
      },
      onNext: function (e) {
        i(me(me({}, t), {}, { annotation: e })), n("go-to-next")
      },
      onFinish: function (e) {
        i(me(me({}, t), {}, { annotation: e })), n()
      },
    })
  },
  we = function (e) {
    var t,
      o = [],
      n = 0,
      a = L(e || [])
    try {
      for (a.s(); !(t = a.n()).done; ) {
        var i = t.value
        i.label &&
          o.push({
            text: i.text,
            label: i.label,
            start: n,
            end: n + i.text.length,
          }),
          (n += i.text.length)
      }
    } catch (e) {
      a.e(e)
    } finally {
      a.f()
    }
    return o
  },
  ke = function (e) {
    var t,
      o = e.sequence,
      n = e.relationships,
      a = new Set(
        (n || []).flatMap(function (e) {
          return [e.from, e.to]
        })
      ),
      i = [],
      r = 0,
      l = L(o || [])
    try {
      for (l.s(); !(t = l.n()).done; ) {
        var s = t.value
        ;(s.label || (s.textId && a.has(s.textId))) &&
          i.push({
            text: s.text,
            textId: s.textId,
            label: s.label,
            start: r,
            end: r + s.text.length - 1,
          }),
          (r += s.text.length)
      }
    } catch (e) {
      l.e(e)
    } finally {
      l.f()
    }
    return { entities: i, relations: n }
  },
  Ee = function (e, t) {
    if (t) {
      var o = []
      ;(t = P(t)).sort(function (e, t) {
        return e.start - t.start
      })
      for (var n = 0, a = 0; a < e.length; a++)
        (t[n] || {}).start === a
          ? (o.push({
              text: t[n].text,
              label: t[n].label,
              textId: t[n].textId || Math.random().toString(36).slice(-6),
            }),
            (a += t[n].text.length - 1),
            o.push({ text: "" }),
            (n += 1))
          : 0 === o.length || o[o.length - 1].label
          ? o.push({ text: e[a], textId: Math.random().toString(36).slice(-6) })
          : (o[o.length - 1].text += e[a])
      if (
        o
          .map(function (e) {
            return e.text
          })
          .join("") !== e
      )
        throw new Error(
          "Combining annotation entities with document didn't match document.\n\n" +
            o
              .map(function (e) {
                return e.text
              })
              .join("") +
            "\n\nvs\n\n" +
            e
        )
      return o.filter(function (e) {
        return e.text.length > 0
      })
    }
  },
  Se = function (e) {
    var t = e.sample,
      o = e.interface,
      n = e.onModifySample,
      a = e.disableHotkeys,
      i = e.sampleIndex,
      r = e.onExit,
      l = (null == t ? void 0 : t.annotation)
        ? Ee(
            null == t ? void 0 : t.document,
            null == t ? void 0 : t.annotation.entities
          )
        : null
    if (!(null == o ? void 0 : o.labels))
      throw new Error("Labels not defined. Try adding some labels in setup.")
    return le.createElement(U, {
      key: i,
      titleContent: le.createElement(R, { paddingLeft: 4 }, "Sample ", i),
      type: "label-sequence",
      separatorRegex: null == o ? void 0 : o.wordSplitRegex,
      document: null == t ? void 0 : t.document,
      labels: null == o ? void 0 : o.labels,
      initialSequence: l,
      hotkeysEnabled: !a,
      onPrev: function (e) {
        var o = { entities: we(e) }
        n(me(me({}, t), {}, { annotation: o })), r("go-to-previous")
      },
      onNext: function (e) {
        var o = { entities: we(e) }
        n(me(me({}, t), {}, { annotation: o })), r("go-to-next")
      },
      onFinish: function (e) {
        var o = { entities: we(e) }
        n(me(me({}, t), {}, { annotation: o })), r()
      },
    })
  },
  Te = function (e) {
    var t,
      o,
      n = e.sample,
      a = e.interface,
      i = e.onExit,
      r = e.onModifySample,
      l = e.disableHotkeys,
      s = e.sampleIndex,
      d = (null == n ? void 0 : n.annotation)
        ? Ee(
            null == n ? void 0 : n.document,
            null == n || null === (t = n.annotation) || void 0 === t
              ? void 0
              : t.entities
          )
        : void 0,
      c =
        (null == n || null === (o = n.annotation) || void 0 === o
          ? void 0
          : o.relations) || []
    if (!(null == a ? void 0 : a.relationLabels))
      throw new Error(
        "Relation labels not defined. Try adding some labels in setup."
      )
    return le.createElement(U, {
      key: s,
      titleContent: le.createElement(R, { paddingLeft: 4 }, "Sample ", s),
      type: "label-relationships",
      separatorRegex: null == a ? void 0 : a.wordSplitRegex,
      document: null == n ? void 0 : n.document,
      entityLabels: null == a ? void 0 : a.entityLabels,
      relationshipLabels: null == a ? void 0 : a.relationLabels,
      initialSequence: d,
      initialRelationships: c,
      hotkeysEnabled: !l,
      onPrev: function (e) {
        r(me(me({}, n), {}, { annotation: ke(e) })), i("go-to-previous")
      },
      onNext: function (e) {
        r(me(me({}, n), {}, { annotation: ke(e) })), i("go-to-next")
      },
      onFinish: function (e) {
        r(me(me({}, n), {}, { annotation: ke(e) })), i()
      },
    })
  }
function Ce() {
  var e,
    t,
    o = ((e = 0), (t = 360), Math.floor(Math.random() * (t - e + 1)) + e)
  return "hsl("
    .concat(o.toString(), ",")
    .concat((100).toString(), "%,")
    .concat((50).toString(), "%)")
}
var Ie = function () {
    return Math.random().toString().split(".")[1]
  },
  De = function (e) {
    switch (e.regionType) {
      case "bounding-box":
        return {
          id: e.id || Ie(),
          cls: e.classification,
          tags: e.labels,
          color: e.color || Ce(),
          type: "box",
          x: e.centerX - e.width / 2,
          y: e.centerY - e.height / 2,
          w: e.width,
          h: e.height,
        }
      case "point":
        return {
          id: e.id || Ie(),
          type: "point",
          tags: e.labels,
          cls: e.classification,
          color: e.color || Ce(),
          x: e.x,
          y: e.y,
        }
      case "polygon":
        return {
          id: e.id || Ie(),
          type: "polygon",
          tags: e.labels,
          cls: e.classification,
          color: e.color || Ce(),
          open: !1,
          points: e.points.map(function (e) {
            return [e.x, e.y]
          }),
        }
      case "line":
      case "pixel-mask":
        throw new Error('Unsupported region "'.concat(JSON.stringify(e), '"'))
      case "keypoints":
        return {
          id: e.id || Ie(),
          type: "keypoints",
          keypointsDefinitionId: e.keypointsDefinitionId,
          points: e.points,
        }
      default:
        return null
    }
  },
  Ae = function (e) {
    switch (e.type) {
      case "point":
        return {
          regionType: "point",
          id: e.id,
          x: e.x,
          y: e.y,
          classification: e.cls,
          labels: e.tags,
          color: e.color,
        }
      case "box":
        return {
          regionType: "bounding-box",
          id: e.id,
          centerX: e.x + e.w / 2,
          centerY: e.y + e.h / 2,
          width: e.w,
          height: e.h,
          classification: e.cls,
          labels: e.tags,
          color: e.color,
        }
      case "polygon":
        return {
          regionType: "polygon",
          id: e.id,
          classification: e.cls,
          labels: e.tags,
          color: e.color,
          points: e.points.map(function (e) {
            var t = N(e, 2)
            return { x: t[0], y: t[1] }
          }),
        }
      case "keypoints":
        return {
          id: e.id || Ie(),
          keypointsDefinitionId: e.keypointsDefinitionId,
          regionType: "keypoints",
          points: e.points,
        }
      default:
        throw new Error(
          'Unsupported riaRegion "'.concat(JSON.stringify(e), '"')
        )
    }
  },
  je = function (e) {
    var t = e.title,
      o = e.taskDatum,
      n = e.index,
      a = e.output
    o = o || {}
    var i = a ? (Array.isArray(a) ? a.map(De) : [De(a)]) : void 0
    if (o.imageUrl)
      return { src: o.imageUrl, name: t || "Sample ".concat(n), regions: i }
    if (o.videoUrl && void 0 !== o.videoFrameAt)
      return {
        src: o.videoUrl,
        frameTime: o.videoFrameAt,
        name: t || "Sample ".concat(n),
        regions: i,
      }
    throw new Error('Task Datum not supported "'.concat(JSON.stringify(o), '"'))
  },
  qe = function (e) {
    var t = {}
    for (var o in e) t[o] = { regions: e[o].regions.map(De) }
    return t
  },
  Ne = {
    "bounding-box": "create-box",
    polygon: ["create-polygon", "create-expanding-line"],
    point: "create-point",
    "allowed-area": "modify-allowed-area",
  },
  Le = oe("div")({ "& .fullscreen": { height: "100%" } }),
  Pe = {},
  Re = function (e) {
    var t = e.sampleIndex,
      o = e.interface,
      n = e.sample,
      a = e.containerProps,
      i = void 0 === a ? Pe : a,
      r = e.onModifySample,
      l = de(!0),
      s = N(l, 2),
      d = s[0],
      c = s[1],
      u = de("select"),
      m = N(u, 2),
      p = m[0],
      g = m[1],
      f = o.regionTypesAllowed,
      v = void 0 === f ? ["bounding-box"] : f,
      h = !Boolean(null == o ? void 0 : o.multipleRegionLabels),
      x = "image_pixel_segmentation" === (null == o ? void 0 : o.type),
      b = j(function (e) {
        var t = e.images[0],
          o = w ? (t.regions || []).map(Ae) : je((t.regions || [])[0]),
          a = e.allowedArea || {},
          i = a.x,
          l = a.y,
          s = a.w,
          d = a.h
        r(
          me(
            me({}, n),
            {},
            { annotation: o },
            e.allowedArea
              ? { allowedArea: { x: i, y: l, width: s, height: d } }
              : {}
          )
        )
      }),
      y = se(
        function () {
          return x
            ? {
                regionClsList: ["background"]
                  .concat(o.labels || [])
                  .map(function (e) {
                    return "string" == typeof e ? e : e.id
                  }),
              }
            : h
            ? {
                regionClsList: (o.labels || []).map(function (e) {
                  return "string" == typeof e ? e : e.id
                }),
              }
            : {
                regionTagList: (o.labels || []).map(function (e) {
                  return "string" == typeof e ? e : e.id
                }),
              }
        },
        [h, o.labels, x]
      ),
      w = o.multipleRegions || void 0 === o.multipleRegions,
      k = j(function (e, t) {
        b(e), c(e.showTags), g(e.selectedTool), i.onExit(t)
      }),
      E = j(function (e) {
        return k(e, "go-to-next")
      }),
      S = j(function (e) {
        return k(e, "go-to-previous")
      }),
      T = se(
        function () {
          return [
            je({
              title: i.title || "Sample ".concat(t),
              taskDatum: n,
              output: n.annotation,
              selectedIndex: t,
            }),
          ]
        },
        [t, i.title]
      ),
      C =
        "image_pixel_segmentation" === o.type
          ? void 0
          : se(
              function () {
                return ["select"].concat(
                  v
                    .flatMap(function (e) {
                      return Ne[e]
                    })
                    .filter(Boolean)
                )
              },
              [v]
            ),
      I = se(
        function () {
          if (!o.allowedArea && !(null == n ? void 0 : n.allowedArea))
            return { x: 0, y: 0, w: 1, h: 1 }
          var e =
            (null == n ? void 0 : n.allowedArea) ||
            (null == o ? void 0 : o.allowedArea)
          return { x: e.x, y: e.y, w: e.width, h: e.height }
        },
        [o.allowedArea, null == n ? void 0 : n.allowedArea]
      )
    return le.createElement(
      Le,
      {
        style: {
          height: i.height || "calc(100% - 70px)",
          minHeight: 600,
          width: "100%",
        },
      },
      le.createElement(
        q,
        Object.assign(
          {
            key: t,
            fullImageSegmentationMode: x,
            selectedImage: 0,
            taskDescription: o.description,
            hideNext: i.hideNext,
            hidePrev: i.hidePrev,
            hideHeader: i.hideHeader,
            hideHeaderText: i.hideHeaderText,
            showTags: d,
          },
          y,
          {
            autoSegmentationOptions: o.autoSegmentationEngine,
            allowedArea: I,
            onNextImage: E,
            onPrevImage: S,
            enabledTools: C,
            selectedTool: p,
            images: T,
            onExit: k,
          }
        )
      )
    )
  },
  Ue = oe("div")({ fontSize: 24, fontWeight: "bold" }),
  Me = function (e) {
    var t = e.children,
      o = e.onNext,
      n = e.onPrev,
      a = e.onRemoveSample,
      i = e.currentSampleIndex,
      r = void 0 === i ? 0 : i,
      l = e.numberOfSamples,
      s = void 0 === l ? 1 : l,
      d = e.globalSampleIndex,
      c = void 0 === d ? 1 : d,
      u = e.titleContent,
      m = e.onClickHeaderItem,
      p = se(
        function () {
          return [
            a && {
              name: "Delete",
              icon: le.createElement(T, null),
              onClick: function () {
                return a(c)
              },
            },
            (r > 0 || n) && { name: "Prev", onClick: n, disabled: 0 === r },
            { name: "Next", onClick: o },
            { name: "Save" },
          ].filter(Boolean)
        },
        [r, c, o, n, a]
      )
    return le.createElement(
      C,
      {
        headerLeftSide:
          void 0 === u
            ? le.createElement(
                R,
                { paddingLeft: 2 },
                le.createElement(
                  Ue,
                  null,
                  "Sample",
                  " ",
                  s > 1 ? "".concat(r, " / ").concat(s) : "".concat(c)
                )
              )
            : u,
        onClickHeaderItem: m,
        headerItems: p,
        iconSidebarItems: [],
        rightSidebarItems: [],
      },
      le.createElement(R, { padding: 2, style: { width: "100%" } }, t)
    )
  },
  Oe = [
    V[600],
    F[600],
    G[600],
    W[600],
    J[600],
    K[600],
    Y[600],
    Q[600],
    V[600],
    X[600],
    Z[600],
  ],
  ze = "abcdefghijklmnopqrstuvwxyz1234567890".split(""),
  He = function (e) {
    var t = e.id.split("").reduce(function (e, t, o) {
      return e + (ze.indexOf(t) + 1)
    }, 0)
    return Oe[t % Oe.length]
  },
  Be = oe("div")({
    maxWidth: "100vw",
    display: "flex",
    flexDirection: "column",
  }),
  _e = oe("div")({ position: "relative", display: "flex", flexGrow: 1 }),
  Ve = oe("img")({
    display: "inline-block",
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    objectFit: "contain",
  }),
  Fe = oe("div")({
    paddingLeft: 50,
    paddingRight: 50,
    marginTop: 8,
    textAlign: "center",
    flexShrink: 0,
  }),
  Ge = oe(A)({
    margin: 8,
    color: "#fff",
    fontSize: 18,
    paddingRight: 16,
    transition: "transform 50ms ease",
  }),
  We = {},
  Je = [],
  Ke = function (e) {
    var t = e.sampleIndex,
      o = e.interface,
      n = e.sample,
      a = e.containerProps,
      i = void 0 === a ? We : a,
      r = e.onModifySample,
      l = i.disableHotkeys
    if (!o.labels)
      throw new Error(
        "No labels defined. Add some labels in Setup to continue."
      )
    var s = de(null),
      d = N(s, 2),
      c = d[0],
      u = d[1],
      m = de(Je),
      p = N(m, 2),
      g = p[0],
      f = p[1],
      v = se(
        function () {
          return o.labels.map(function (e) {
            return "string" == typeof e ? { id: e, description: e } : e
          })
        },
        [o.labels]
      ),
      h = j(function (e) {
        r(me(me({}, n), {}, { annotation: g })), i.onExit && i.onExit()
      }),
      x = j(function () {
        r(me(me({}, n), {}, { annotation: g })), i.onExit("go-to-next")
      }),
      b = j(function () {
        r(me(me({}, n), {}, { annotation: g })), i.onExit("go-to-previous")
      })
    ce(
      function () {
        var e = setTimeout(function () {
          u(null)
        }, 100)
        return function () {
          return clearTimeout(e)
        }
      },
      [c]
    )
    var y = j(function (e) {
      var t
      u(e),
        (t =
          "string" != typeof g && (g || []).includes(e.id)
            ? I(g, e.id)
            : o.multiple
            ? g.concat([e.id])
            : e.id),
        f(t),
        !o.multiple &&
          t.length > 0 &&
          (r(me(me({}, n), {}, { annotation: t })), i.onExit("go-to-next"))
    })
    ce(
      function () {
        var e = null == n ? void 0 : n.annotation
        e || (e = []), "string" == typeof e && (e = [e]), f(e)
      },
      [t, n]
    )
    var w = se(
        function () {
          if (l) return [{}, {}]
          var e,
            t = { " ": x, backspace: b, enter: h, rightarrow: x, leftarrow: b },
            o = {},
            n = L(v)
          try {
            var a = function () {
              var n = e.value,
                a = n.id
                  .split("")
                  .filter(function (e) {
                    return ze.includes(e)
                  })
                  .find(function (e) {
                    return !t[e.toLowerCase()]
                  })
              if (!a) return "continue"
              ;(t[a] = function () {
                return y(n)
              }),
                (o[n.id] = a)
            }
            for (n.s(); !(e = n.n()).done; ) a()
          } catch (e) {
            n.e(e)
          } finally {
            n.f()
          }
          return [t, o]
        },
        [v, y, h, x, b, l]
      ),
      k = N(w, 2),
      E = k[0],
      S = k[1]
    return (
      ce(
        function () {
          if (!l) {
            var e = function (e) {
              var t = e.key.toLowerCase()
              E[t] && E[t]()
            }
            return (
              window.addEventListener("keydown", e),
              function () {
                window.removeEventListener("keydown", e)
              }
            )
          }
        },
        [E, l]
      ),
      le.createElement(
        Me,
        Object.assign({}, i, {
          onNext: x,
          onPrev: b,
          onRemoveSample: i.onRemoveSample,
          onClickHeaderItem: h,
          currentSampleIndex: t,
        }),
        le.createElement(
          Be,
          {
            style: { height: i.height || "calc(100% - 70px)", minHeight: 600 },
          },
          le.createElement(
            _e,
            null,
            le.createElement(Ve, { src: null == n ? void 0 : n.imageUrl })
          ),
          le.createElement(
            Fe,
            null,
            v.map(function (e) {
              return le.createElement(
                Ge,
                {
                  key: e.id,
                  onClick: function () {
                    return y(e)
                  },
                  style: {
                    backgroundColor: He(e),
                    transform: c === e ? "scale(1.1,1.1)" : void 0,
                  },
                },
                le.createElement(D, {
                  style: { color: "#fff" },
                  checked: "object" == typeof g ? g.includes(e.id) : g === e.id,
                }),
                e.id,
                S[e.id] ? " (".concat(S[e.id], ")") : ""
              )
            })
          )
        )
      )
    )
  },
  Ye = {
    "bounding-box": "create-box",
    polygon: "create-polygon",
    "full-segmentation": "create-polygon",
    point: "create-point",
  },
  Qe = {},
  Xe = function (e) {
    var t = e.interface,
      o = e.sampleIndex,
      n = e.sample,
      a = e.containerProps,
      i = void 0 === a ? Qe : a,
      r = e.onModifySample,
      l = t.regionTypesAllowed,
      s = void 0 === l ? ["bounding-box"] : l,
      d = !Boolean(null == t ? void 0 : t.multipleRegionLabels),
      c = se(
        function () {
          return d
            ? {
                regionClsList: (t.labels || []).map(function (e) {
                  return "string" == typeof e ? e : e.id
                }),
              }
            : {
                regionTagList: (t.labels || []).map(function (e) {
                  return "string" == typeof e ? e : e.id
                }),
              }
        },
        [d, t.labels]
      ),
      u = function (e) {
        var t = {}
        for (var o in e.keyframes)
          t[o] = { regions: e.keyframes[o].regions.map(Ae) }
        return t
      },
      m = j(function (e) {
        var t = { keyframes: u(e) }
        r(me(me({}, n), {}, { annotation: t })), i.onExit && i.onExit()
      }),
      p = j(function (e) {
        var t = { keyframes: u(e) }
        r(me(me({}, n), {}, { annotation: t })),
          i.onExit && i.onExit("go-to-next")
      }),
      g = j(function (e) {
        var t = { keyframes: u(e) }
        r(me(me({}, n), {}, { annotation: t })),
          i.onExit && i.onExit("go-to-previous")
      }),
      f = se(
        function () {
          return ["select"].concat(
            s
              .map(function (e) {
                return Ye[e]
              })
              .filter(Boolean)
          )
        },
        [s]
      )
    if (!n) throw new Error("No sample data provided selected")
    if (!n.videoUrl) throw new Error("Sample must have videoUrl")
    var v = n.annotation || {}
    return le.createElement(
      "div",
      {
        style: {
          height: i.height || "calc(100vh - 70px)",
          width: "100%",
          minHeight: 600,
        },
      },
      le.createElement(
        q,
        Object.assign({ key: o, taskDescription: t.description }, c, {
          enabledTools: f,
          keyframes: qe((null == v ? void 0 : v.keyframes) || {}),
          onNextImage: p,
          onPrevImage: g,
          videoName: n.customId || "",
          videoTime: 0,
          videoSrc: n.videoUrl,
          onExit: m,
        })
      )
    )
  },
  Ze = function (e) {
    var t = e.sampleIndex,
      o = e.sample,
      n = e.interface,
      a = e.onModifySample,
      i = e.onExit
    return le.createElement(U, {
      key: t,
      titleContent: le.createElement(R, { paddingLeft: 4 }, "Sample ", t),
      type: "transcribe",
      audio: o.audioUrl,
      phraseBank: n.phraseBank,
      initialTranscriptionText: o.annotation || "",
      onPrev: function (e) {
        a(me(me({}, o), {}, { annotation: e })), i("go-to-previous")
      },
      onNext: function (e) {
        a(me(me({}, o), {}, { annotation: e })), i("go-to-next")
      },
      onFinish: function (e) {
        a(me(me({}, o), {}, { annotation: e })), i()
      },
    })
  },
  $e = oe("div")({ "& .fullscreen": { height: "100%" } }),
  et = {},
  tt = ["create-keypoints"],
  ot = function (e) {
    e.sampleIndex
    var t = e.interface,
      o = e.sampleIndex,
      n = e.sample,
      a = e.containerProps,
      i = void 0 === a ? et : a,
      r = e.onModifySample,
      l = j(function (e) {
        var t = (e.images[0].regions || []).map(Ae)
        r(me(me({}, n), {}, { annotation: t }))
      }),
      s = j(function (e, t) {
        l(e), i.onExit && i.onExit(t)
      }),
      d = j(function (e) {
        l(e), s(e, "go-to-next")
      }),
      c = j(function (e) {
        l(e), s(e, "go-to-previous")
      }),
      u = se(
        function () {
          return n
            ? [
                je({
                  title: i.title || "Sample ".concat(o),
                  taskDatum: n,
                  output: null == n ? void 0 : n.annotation,
                }),
              ]
            : []
        },
        [o, i.title]
      )
    return le.createElement(
      $e,
      {
        style: {
          height: i.height || "calc(100% - 70px)",
          minHeight: 600,
          width: "100%",
        },
      },
      n
        ? le.createElement(q, {
            key: o,
            keypointDefinitions: t.keypointDefinitions,
            selectedImage: 0,
            taskDescription: t.description,
            onNextImage: d,
            onPrevImage: c,
            enabledTools: tt,
            images: u,
            onExit: s,
          })
        : "loading..."
    )
  },
  nt = oe("div")({
    maxWidth: "100vw",
    display: "flex",
    flexDirection: "column",
  }),
  at = {},
  it = function (e) {
    var t = e.sampleIndex,
      o = e.interface,
      n = e.sample,
      a = e.containerProps,
      i = void 0 === a ? at : a,
      r = e.onModifySample,
      l = de(n),
      s = N(l, 2),
      d = s[0],
      c = s[1],
      u = j(function () {
        r(d), i.onExit && i.onExit()
      }),
      m = j(function () {
        r(d), i.onExit("go-to-next")
      }),
      p = j(function () {
        r(d), i.onExit("go-to-previous")
      })
    return le.createElement(
      Me,
      Object.assign({}, i, {
        onNext: m,
        onPrev: p,
        onRemoveSample: i.onRemoveSample,
        onClickHeaderItem: u,
        currentSampleIndex: t,
      }),
      le.createElement(
        nt,
        { style: { height: i.height || "calc(100% - 70px)", minHeight: 600 } },
        le.createElement(S, { sample: d, interface: o, onModifySample: c })
      )
    )
  }
function rt(e) {
  var t = e.description,
    o = e.imageUrl,
    n = e.url,
    a = e.pdfUrl
  return (
    t ||
    (o
      ? "![".concat(o, "](").concat(o, ")")
      : a
      ? "[PDF Link](".concat(a, ")") +
        '<object data="'.concat(
          a.replace("http://", "https://"),
          '" type="application/pdf" width="100%" height="600px"></object>'
        )
      : n
      ? "Use this [Link](".concat(n, ")")
      : null)
  )
}
var lt = ne({
    linkButtonContainer: { marginLeft: 8, marginRight: 8 },
    linkButton: {
      textTransform: "none",
      cursor: "pointer",
      textDecoration: "underline",
    },
  }),
  st = function (e) {
    var t = e.onClick,
      o = e.text,
      n = lt()
    return le.createElement(
      "span",
      { className: n.linkButtonContainer },
      "(",
      le.createElement("span", { onClick: t, className: n.linkButton }, o),
      ")"
    )
  },
  dt = k(function (e) {
    return {
      footer: { backgroundColor: "#fff", marginTop: 40 },
      footerContent: {
        alignItems: "center",
        padding: 20,
        display: "flex",
        justifyContent: "space-between",
      },
      footerBorder: {
        borderTop: "1px solid #ccc",
        marginLeft: 20,
        marginRight: 20,
      },
      footerCount: { display: "inline-flex" },
      allSamplesButton: {
        color: "#fff",
        border: "1px solid rgba(255,255,255,0.5)",
        marginRight: 10,
        paddingLeft: 8,
      },
      sampleIcon: { marginRight: 8 },
      menuButton: { marginRight: 8, color: "#fff" },
      grow: { flexGrow: 1 },
      buttons: { "& > *": { margin: 4 } },
      description: {
        padding: 10,
        "& img": {
          maxWidth: "calc(100% - 16px)",
          marginLeft: 8,
          marginRight: 8,
          maxHeight: 600,
        },
      },
      sectionHeader: {
        fontWeight: 700,
        fontSize: 12,
        padding: 10,
        paddingTop: 16,
        textTransform: "uppercase",
        color: $[600],
      },
      content: { padding: 10 },
    }
  }),
  ct = function (e) {
    var t = e.hideDescription,
      o =
        void 0 === t
          ? '"true"' === window.localStorage.getItem("hideDescription")
          : t,
      n = (e.lastSampleExitText, e.onExit),
      a = e.requireCompleteToPressNext,
      i = void 0 !== a && a,
      r = (e.samples, e.minContentHeight),
      l = e.currentSampleIndex,
      s = e.totalSamples,
      k = e.onChangeSample,
      E = e.taskOutput,
      S = void 0 === E ? [] : E,
      T = e.description,
      C = e.children,
      I = dt(),
      D = de(o),
      j = N(D, 2),
      q = j[0],
      L = j[1],
      P = function (e) {
        window.localStorage.setItem(
          "hideDescription",
          '"'.concat(e ? "true" : "false", '"')
        ),
          L(e)
      },
      R = de(!1),
      U = N(R, 2),
      M = U[0],
      O = U[1]
    return le.createElement(
      le.Fragment,
      null,
      le.createElement(
        w,
        { container: !0 },
        !q &&
          le.createElement(
            w,
            { item: !0, xs: 12, sm: 12, md: 6 },
            le.createElement(
              "div",
              { className: I.sectionHeader },
              "Description",
              le.createElement(st, {
                onClick: function () {
                  return P(!0)
                },
                text: "hide",
              })
            ),
            le.createElement(
              "div",
              { className: I.description },
              le.createElement(y, { escapeHtml: !1, source: T })
            )
          ),
        le.createElement(
          w,
          { item: !0, xs: 12, sm: 12, md: q ? 12 : 6 },
          le.createElement(
            "div",
            { className: I.sectionHeader },
            "Sample ",
            l + 1,
            "/",
            s,
            q &&
              le.createElement(st, {
                onClick: function () {
                  return P(!1)
                },
                text: "show description",
              }),
            s > 1 &&
              le.createElement(st, {
                onClick: function () {
                  return O(!0)
                },
                text: "view all",
              }),
            n &&
              le.createElement(st, {
                onClick: function () {
                  return n()
                },
                text: "exit without saving",
              })
          ),
          le.createElement(
            "div",
            { style: { minHeight: r }, className: I.content },
            C
          )
        ),
        s > 1 &&
          le.createElement(
            w,
            { item: !0, xs: 12 },
            le.createElement(
              "div",
              { className: I.footer },
              le.createElement("div", { className: I.footerBorder }),
              le.createElement(
                "div",
                { className: I.footerContent },
                le.createElement(
                  A,
                  {
                    onClick: function () {
                      return k((l - 1 + s) % s)
                    },
                  },
                  le.createElement(x, null),
                  " Prev Sample"
                ),
                le.createElement(
                  A,
                  {
                    onClick: function () {
                      return O(!0)
                    },
                    className: I.footerCount,
                  },
                  l + 1,
                  " / ",
                  s
                ),
                le.createElement(
                  A,
                  {
                    disabled: i && !S[l],
                    onClick: function () {
                      return k((l + 1) % s)
                    },
                  },
                  i && !S[l] ? "Save to Continue" : "Next Sample",
                  le.createElement(b, null)
                )
              )
            )
          )
      ),
      le.createElement(
        f,
        {
          open: M,
          anchor: "left",
          onClose: function () {
            return O(!1)
          },
        },
        le.createElement(
          g,
          { style: { minWidth: 300 } },
          le.createElement(c, null, "Samples"),
          d(0, s).map(function (e) {
            return le.createElement(
              p,
              {
                style: { backgroundColor: e === l ? $[200] : void 0 },
                button: !0,
                onClick: function () {
                  return k(e)
                },
              },
              le.createElement(
                m,
                { style: { color: e === l ? V[500] : void 0 } },
                S[e] ? le.createElement(v, null) : le.createElement(h, null)
              ),
              le.createElement(u, null, "Sample ", e + 1)
            )
          })
        )
      )
    )
  },
  ut = function (e) {
    var t = e.containerProps,
      o = e.interface,
      n = e.sample,
      a = e.sampleIndex,
      i = e.onModifySample,
      r = n.surveyjs || o.surveyjs
    if (!r)
      throw new Error("No survey/form created. Try adding some inputs in Setup")
    return le.createElement(
      ct,
      Object.assign({}, t, {
        currentSampleIndex: a,
        taskOutput: null == n ? void 0 : n.annotation,
        description: rt(n) || (null == o ? void 0 : o.description),
      }),
      le.createElement(E, {
        key: a,
        variant: "flat",
        form: r,
        defaultAnswers: n.annotation || void 0,
        completeText: "Save & Next",
        onFinish: function (e) {
          i(me(me({}, n), {}, { annotation: e })), t.onExit("go-to-next")
        },
      })
    )
  },
  mt = ne({
    root: { padding: 50, textAlign: "center" },
    title: { margin: 50 },
    explain: {},
  }),
  pt = function (e) {
    var t = e.title,
      o = e.description,
      n = e.children,
      a = mt()
    return le.createElement(
      "div",
      { className: a.root },
      le.createElement(
        s,
        { variant: "h4", component: "div", className: a.title },
        t
      ),
      le.createElement(
        s,
        { variant: "h6", component: "div", className: a.explain },
        o || n
      )
    )
  },
  gt = function () {
    return le.createElement(
      pt,
      { title: "No Samples to Show" },
      "Make sure that ",
      le.createElement("code", null, "samples"),
      " is defined and not empty.",
      le.createElement("br", null),
      le.createElement("br", null),
      "Need help setting up? "
    )
  },
  ft = function (e) {
    var l = e.type,
      s = ue(e, ["type"])
    switch (l) {
      case "image_label":
      case "image_segmentation":
        return le.createElement(r, s)
      case "audio_transcription":
        return le.createElement(n, s)
      case "data_entry":
        return le.createElement(a, s)
      case "text_entity_recognition":
        return le.createElement(i, s)
      case "3d_bounding_box":
        return le.createElement(t, s)
      default:
        return le.createElement(o, s)
    }
  },
  vt = oe("div")({
    fontSize: 18,
    fontWeight: "bold",
    color: $[700],
    borderBottom: "1px solid ".concat($[300]),
    paddingBottom: 8,
    marginBottom: 8,
    paddingLeft: 8,
  }),
  ht = oe(A)({
    display: "flex",
    textAlign: "left",
    justifyContent: "flex-start",
    marginTop: 8,
  }),
  xt = function (e) {
    var t = e.sample,
      o = e.interface,
      n = e.onModifySample,
      a = e.containerProps,
      i = e.sampleIndex,
      r = o.fields,
      s = de(),
      d = N(s, 2),
      c = d[0],
      u = d[1],
      m = H().t
    if (!r) throw new Error("No fields defined. Try adding a field in Setup")
    return c
      ? le.createElement(bt, {
          interface: c.interface,
          sample: me(
            me({}, t),
            {},
            { annotation: (t.annotation || {})[c.fieldName] }
          ),
          onExit: function () {
            return u(null)
          },
          onModifySample: function (e) {
            n(
              me(
                me({}, t),
                {},
                {
                  annotation: me(
                    me({}, t.annotation),
                    {},
                    l({}, c.fieldName, e)
                  ),
                }
              )
            ),
              u(null)
          },
        })
      : le.createElement(
          ct,
          Object.assign({}, a, {
            currentSampleIndex: i,
            description: rt(t) || o.description,
          }),
          le.createElement(vt, null, "Fields"),
          r.map(function (e, o) {
            return le.createElement(
              ht,
              {
                key: e.fieldName,
                onClick: function () {
                  u(me(me({}, e), {}, { index: o }))
                },
                fullWidth: !0,
                variant: "outlined",
              },
              le.createElement(ft, {
                style: { color: $[500], marginRight: 16 },
                type: e.interface.type,
              }),
              e.fieldName,
              le.createElement(R, { flexGrow: 1 }),
              le.createElement(D, {
                checked: Boolean((t.annotation || {})[e.fieldName]),
              }),
              le.createElement(b, null)
            )
          }),
          le.createElement(
            ht,
            {
              onClick: function () {
                return a.onExit("go-to-next")
              },
              fullWidth: !0,
              variant: "outlined",
            },
            le.createElement(b, { style: { color: $[500], marginRight: 16 } }),
            m("next"),
            le.createElement(R, { flexGrow: 1 }),
            le.createElement(R, { height: "42px" }),
            le.createElement(b, null)
          )
        )
  },
  bt = function (e) {
    var t = e.interface,
      o = e.sample,
      n = e.onExit,
      a = e.loading,
      i = e.onRemoveSample,
      r = e.hideHeader,
      l = e.hideHeaderText,
      s = e.hideNext,
      d = e.hidePrev,
      c = e.hideDescription,
      u = e.disableHotkeys,
      m = void 0 !== u && u,
      p = e.title,
      g = e.sampleIndex,
      f = e.onModifySample,
      v = e.height,
      h = e.onClickSetup,
      x = H().t,
      b = se(
        function () {
          return {
            hideHeader: r,
            hideHeaderText: l,
            hideNext: s,
            hidePrev: d,
            hideDescription: c,
            title: p,
            onExit: n,
            onRemoveSample: i,
            height: v,
            disableHotkeys: m,
            globalSampleIndex: g,
          }
        },
        [r, l, s, d, c, p, v, n, m, i, g]
      )
    if (a)
      return le.createElement(pt, {
        title: "Loading Sample...",
        description: "",
      })
    if (!(null == t ? void 0 : t.type))
      return le.createElement(pt, {
        title: "Set up your project to begin labeling",
        description: le.createElement(
          "p",
          null,
          x("universal-data-viewer-interface-warning"),
          le.createElement("br", null),
          le.createElement("br", null),
          le.createElement(
            A,
            { color: "primary", variant: "contained", onClick: h },
            x("setup-project")
          )
        ),
      })
    if (!o) return le.createElement(gt, null)
    switch (null == t ? void 0 : t.type) {
      case "data_entry":
        return le.createElement(ut, {
          containerProps: b,
          sampleIndex: g,
          interface: t,
          sample: o,
          onModifySample: f,
          onExit: n,
        })
      case "text_classification":
        return le.createElement(ye, {
          containerProps: b,
          sampleIndex: g,
          interface: t,
          sample: o,
          onModifySample: f,
          onExit: n,
        })
      case "text_entity_recognition":
        return le.createElement(Se, {
          containerProps: b,
          sampleIndex: g,
          interface: t,
          sample: o,
          onModifySample: f,
          onExit: n,
        })
      case "text_entity_relations":
        return le.createElement(Te, {
          containerProps: b,
          sampleIndex: g,
          interface: t,
          sample: o,
          onModifySample: f,
          onExit: n,
        })
      case "image_segmentation":
      case "image_pixel_segmentation":
        return le.createElement(Re, {
          containerProps: b,
          sampleIndex: g,
          interface: t,
          sample: o,
          onExit: n,
          onModifySample: f,
        })
      case "image_classification":
        return le.createElement(Ke, {
          containerProps: b,
          sampleIndex: g,
          interface: t,
          sample: o,
          onExit: n,
          onModifySample: f,
        })
      case "video_segmentation":
        return le.createElement(Xe, {
          containerProps: b,
          sampleIndex: g,
          interface: t,
          sample: o,
          onExit: n,
          onModifySample: f,
        })
      case "composite":
        return le.createElement(xt, {
          containerProps: b,
          sampleIndex: g,
          interface: t,
          sample: o,
          onModifySample: f,
          onExit: n,
        })
      case "audio_transcription":
        return le.createElement(Ze, {
          containerProps: b,
          sampleIndex: g,
          interface: t,
          sample: o,
          onModifySample: f,
          onExit: n,
        })
      case "image_landmark_annotation":
        return le.createElement(ot, {
          containerProps: b,
          sampleIndex: g,
          interface: t,
          sample: o,
          onModifySample: f,
          onExit: n,
        })
      case "time_series":
        return le.createElement(it, {
          containerProps: b,
          sampleIndex: g,
          interface: t,
          sample: o,
          onModifySample: f,
          onExit: n,
        })
      default:
        return '"'.concat(null == t ? void 0 : t.type, '" not supported')
    }
  },
  yt = function (e) {
    var t = e.container,
      o = e.udt,
      n = ue(e, ["container", "udt"])
    ie.render(
      le.createElement(
        ge,
        null,
        le.createElement(
          bt,
          me(
            me({}, n),
            {},
            {
              dataset: o,
              onModifySample: function (e, t) {
                n.onSaveSample &&
                  n.onSaveSample(
                    me(me({}, o.samples[e]), {}, { annotation: t }),
                    e
                  )
              },
            }
          )
        )
      ),
      "string" == typeof t ? document.getElementById(t) : t
    )
  }
window.UniversalDataTool = { open: yt, UniversalDataViewer: yt }
//# sourceMappingURL=main.js.map
