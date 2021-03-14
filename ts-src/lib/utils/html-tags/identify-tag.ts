interface Tag {
    tag: string;
    name: string;
    textContent: boolean; // generally, this is to say if the element can be set as "contenteditable". i'm sure in global attribute 'coz almost everything can be attribute to "contenteditable".
    type: string; // this is either "paired" or "unpaired"
    blockLevel: string; // this is either "block" or "inline"
    mainAttributes: string[];
    supportAttributes: string[];
    validParent: string[];
    html5Supported: boolean;
    desciption: string;
}
const globalAttributes = ["accesskey", "class", "contenteditable", "data-*", "dir", "draggable", "hidden", "id", "lang", "spellcheck", "style", "tabindex", "title", "translate"];
const windowEvents = ["onafterprint", "onbeforeprint", "onbeforeunload", "onerror", "onhashchange", "onload", "onmessage", "onoffline", "ononline", "onpagehide", "onpageshow", "onpopstate", "onresize", "onstorage", "onunload"];
const formEvents = [ "onblur", "onchange", "oncontextmenu", "onfocus", "oninput", "oninvalid", "onreset", "onsearch", "onselect", "onsubmit"];
const keyboardEvents = ["onkeydown", "onkeypress", "onkeyup"];
const mouseEvents = [ "onclick", "ondblclick", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onwheel"];
const dragEvents = [ "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "onscroll"];
const clipboardEvents = ["oncopy", "oncut", "onpaste"];
const mediaEvents = [ "onabort", "oncanplay", "oncanplaythrough", "oncuechange", "ondurationchange", "onemptied", "onended", "onerror", "onloadeddata", "onloadedmetadata", "onloadstart", "onpause", "onplay", "onplaying", "onprogress", "onratechange", "onseeked", "onseeking", "onstalled", "onsuspend", "ontimeupdate", "onvolumechange", "onwaiting"];
const miscEvent = ["ontoggle"];
const globalEventAttributes = [...windowEvents, ...formEvents, ...keyboardEvents, ...mouseEvents, ...dragEvents, ...clipboardEvents, ...mediaEvents, ...miscEvent];

function getAllSupportAttributes() {
    return [...globalAttributes, ...globalEventAttributes];
}

function getTagInfo(tag: string) {
    let objTag: Tag = {
        tag: "",
        name: "",
        textContent: false,
        type: "",
        blockLevel: "",
        mainAttributes: [],
        supportAttributes: [],
        desciption: "",
        validParent: [],
        html5Supported: false,
    };
    switch ((tag).toLowerCase()) {
        case "<!--...-->":
            objTag = {
                tag: "<!--...-->",
                name: "Comment",
                textContent: false,
                type: "paired",
                blockLevel: "",
                mainAttributes: [],
                supportAttributes: [],
                validParent: [''],
                html5Supported: true,
                desciption: `The comment tag is used to insert comments in the source code. Comments are not displayed in the browsers.

                You can use comments to explain your code, which can help you when you edit the source code at a later date. This is especially useful if you have a lot of code.`,
            };
            break;
        case "<!doctype>":
            objTag = {
                tag: "<!DOCTYPE>",
                name: "Document Type",
                textContent: false,
                type: "unpaired",
                blockLevel: "",
                mainAttributes: ["html"],
                supportAttributes: [],
                validParent: [''],
                html5Supported: true,
                desciption: `All HTML documents must start with a <!DOCTYPE> declaration.

                The declaration is not an HTML tag. It is an "information" to the browser about what document type to expect.`,
            };
            break;
        case "a":
            objTag = {
                tag: "<a></a>",
                name: "Anchor",
                textContent: true,
                type: "paired",
                blockLevel: "inline",
                mainAttributes: [
                    "download",
                    "href",
                    "hreflang",
                    "media",
                    "ping",
                    "referrerpolicy",
                    "rel",
                    "target",
                    "type",
                ],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "abbr",
                    "acronym",
                    "address",
                    "article",
                    "aside",
                    "b",
                    "bdi",
                    "bdo",
                    "big",
                    "blockquote",
                    "body",
                    "caption",
                    "center",
                    "cite",
                    "code",
                    "dd",
                    "del",
                    "details",
                    "dfn",
                    "dialog",
                    "div",
                    "dt",
                    "em",
                    "figcaption",
                    "figure",
                    "footer",
                    "form",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "i",
                    "ins",
                    "label",
                    "legend",
                    "li",
                    "main",
                    "mark",
                    "nav",
                    "ol",
                    "p",
                    "q",
                    "rp",
                    "rt",
                    "ruby",
                    "s",
                    "samp",
                    "section",
                    "small",
                    "span",
                    "strike",
                    "strong",
                    "sub",
                    "summary",
                    "sup",
                    "td",
                    "th",
                    "tt",
                    "u",
                    "wbr",
                ],
                html5Supported: true,
                desciption: `The <a> tag defines a hyperlink, which is used to link from one page to another.

                The most important attribute of the <a> element is the href attribute, which indicates the link's destination.
                
                By default, links will appear as follows in all browsers:
                
                • An unvisited link is underlined and blue
                • A visited link is underlined and purple
                • An active link is underlined and red`,
            };
            break;
        case "abbr":
            objTag = {
                tag: "<abbr></abbr>",
                name: "Abbreviation",
                textContent: true,
                type: "paired",
                blockLevel: "inline",
                mainAttributes: ["title"],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "a",
                    "address",
                    "article",
                    "aside",
                    "b",
                    "bdi",
                    "bdo",
                    "big",
                    "blockquote",
                    "caption",
                    "cite",
                    "data",
                    "dd",
                    "del",
                    "dfn",
                    "dialog",
                    "dt",
                    "em",
                    "figcaption",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "i",
                    "ins",
                    "li",
                    "p",
                    "q",
                    "rp",
                    "rt",
                    "ruby",
                    "s",
                    "samp",
                    "small",
                    "span",
                    "strike",
                    "strong",
                    "sub",
                    "summary",
                    "sup",
                    "td",
                    "th",
                ],
                html5Supported: true,
                desciption: `The <abbr> tag defines an abbreviation or an acronym, like "HTML", "CSS", "Mr.", "Dr.", "ASAP", "ATM".

                Tip: Use the global title attribute to show the description for the abbreviation/acronym when you mouse over the element.`,
            };
            break;
        case "acronym":
            objTag = {
                tag: "<acronym></acronym>",
                name: "Acronym",
                textContent: true,
                type: "paired",
                blockLevel: "inline",
                mainAttributes: [],
                supportAttributes: [],
                validParent: [
                    "a",
                    "address",
                    "article",
                    "aside",
                    "b",
                    "bdi",
                    "bdo",
                    "big",
                    "blockquote",
                    "caption",
                    "cite",
                    "data",
                    "dd",
                    "del",
                    "dfn",
                    "dialog",
                    "dt",
                    "em",
                    "figcaption",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "i",
                    "ins",
                    "li",
                    "p",
                    "q",
                    "rp",
                    "rt",
                    "ruby",
                    "s",
                    "samp",
                    "small",
                    "span",
                    "strike",
                    "strong",
                    "sub",
                    "summary",
                    "sup",
                    "td",
                    "th",
                ],
                html5Supported: false,
                desciption: `An acronym or abbreviation should be marked up with the <abbr> tag.`,
            };
            break;
        case "address":
            objTag = {
                tag: "<address></address>",
                name: "Address",
                textContent: true,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [""],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "a",
                    "article",
                    "div",
                    "main",
                    "section",
                    "td",
                ],
                html5Supported: true,
                desciption: `The <address> tag defines the contact information for the author/owner of a document or an article.

                The contact information can be an email address, URL, physical address, phone number, social media handle, etc.
                
                The text in the <address> element usually renders in italic, and browsers will always add a line break before and after the <address> element.`,
            };
            break;
        case "applet":
            objTag = {
                tag: "<applet></applet>",
                name: "Applet",
                textContent: false,
                type: "paired",
                blockLevel: "",
                mainAttributes: [],
                supportAttributes: [],
                validParent: [
                    "article",
                    "body",
                    "div",
                    "main",
                    "section"
                ],
                html5Supported: false,
                desciption: `The <applet> tag was used in HTML 4 to define an embedded applet (Plug-in).`,
            };
            break;
        case "area":
            objTag = {
                tag: "<area>",
                name: "Area",
                textContent: false,
                type: "unpaired",
                blockLevel: "inline",
                mainAttributes: [
                    "alt",
                    "coords",
                    "download",
                    "href",
                    "hreflang",
                    "media",
                    "referrerpolicy",
                    "rel",
                    "shape",
                    "target",
                    "type",
                ],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "map"
                ],
                html5Supported: true,
                desciption: `The <area> tag defines an area inside an image map (an image map is an image with clickable areas).

                <area> elements are always nested inside a <map> tag.
                
                Note: The usemap attribute in <img> is associated with the <map> element's name attribute, and creates a relationship between the image and the map.`,
            };
            break;
        case "article":
            objTag = {
                tag: "<article></article>",
                name: "Article",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "body",
                    "div",
                    "main",
                    "section",
                ],
                html5Supported: true,
                desciption: `The <article> tag specifies independent, self-contained content.

                An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.
                
                Potential sources for the <article> element:
                
                • Forum post
                • Blog post
                • News story
                Note: The <article> element does not render as anything special in a browser. However, you can use CSS to style the <article> element.`,
            };
            break;
        case "aside":
            objTag = {
                tag: "<aside></aside>",
                name: "Aside",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "article",
                    "body",
                    "div",
                    "main",
                    "section",
                ],
                html5Supported: true,
                desciption: `The <aside> tag defines some content aside from the content it is placed in.

                The aside content should be indirectly related to the surrounding content.
                
                Tip: The <aside> content is often placed as a sidebar in a document.
                
                Note: The <aside> element does not render as anything special in a browser. However, you can use CSS to style the <aside> element (see example below).`,
            };
            break;
        case "audio":
            objTag = {
                tag: "<audio></audio>",
                name: "Audio",
                textContent: false,
                type: "paired",
                blockLevel: "",
                mainAttributes: [
                    "autoplay",
                    "controls",
                    "loop",
                    "muted",
                    "preload",
                    "src",
                ],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "article",
                    "body",
                    "div",
                    "footer",
                    "header",
                    "main",
                    "section",
                ],
                html5Supported: true,
                desciption: `The <audio> tag is used to embed sound content in a document, such as music or other audio streams.

                The <audio> tag contains one or more <source> tags with different audio sources. The browser will choose the first source it supports.
                
                The text between the <audio> and </audio> tags will only be displayed in browsers that do not support the <audio> element.
                
                There are three supported audio formats in HTML: MP3, WAV, and OGG.`,
            };
            break;
        case "b":
            objTag = {
                tag: "<b></b>",
                name: "Bold",
                textContent: true,
                type: "paired",
                blockLevel: "inline",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "a",
                    "abbr",
                    "acronym",
                    "address",
                    "article",
                    "aside",
                    "bdi",
                    "bdo",
                    "big",
                    "blockquote",
                    "body",
                    "center",
                    "cite",
                    "dd",
                    "del",
                    "dfn",
                    "dialog",
                    "div",
                    "dt",
                    "em",
                    "footer",
                    "i",
                    "ins",
                    "li",
                    "main",
                    "nav",
                    "p",
                    "q",
                    "rp",
                    "rt",
                    "ruby",
                    "s",
                    "section",
                    "small",
                    "span",
                    "strike",
                    "sub",
                    "summary",
                    "sup",
                    "td",
                    "th",
                    "tt",
                    "u",
                    "wbr",
                ],
                html5Supported: true,
                desciption: `The <b> tag specifies bold text without any extra importance.`,
            };
            break;
        case "base":
            objTag = {
                tag: "<base>",
                name: "Base",
                textContent: false,
                type: "unpaired",
                blockLevel: "",
                mainAttributes: ["href", "target"],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "head"
                ],
                html5Supported: true,
                desciption: `The <base> tag specifies the base URL and/or target for all relative URLs in a document.

                The <base> tag must have either an href or a target attribute present, or both.
                
                There can only be one single <base> element in a document, and it must be inside the <head> element.`,
            };
            break;
        case "basefont":
            objTag = {
                tag: "<basefont>",
                name: "Basefont",
                textContent: false,
                type: "unpaired",
                blockLevel: "",
                mainAttributes: ["color", "face", "size"],
                supportAttributes: [],
                validParent: [
                    "head",
                ],
                html5Supported: false,
                desciption: `The HTML <basefont> tag defines the default font-family, font-size and color for the text in the HTML document. Since this tag was removed in HTML5, it is recommended that you use CSS properties such as font, font-family, font-size and color to format the text in the document. This tag is also commonly referred to as the <basefont> element.`,
            };
            break;
        case "bdi":
            objTag = {
                tag: "<bdi></bdi>",
                name: "Bi-Directional Isolation",
                textContent: true,
                type: "paired",
                blockLevel: "inline",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "a",
                    "abbr",
                    "acronym",
                    "address",
                    "article",
                    "aside",
                    "b",
                    "bdo",
                    "big",
                    "blockquote",
                    "body",
                    "center",
                    "cite",
                    "dd",
                    "del",
                    "dfn",
                    "dialog",
                    "div",
                    "dt",
                    "em",
                    "footer",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "i",
                    "ins",
                    "li",
                    "main",
                    "nav",
                    "p",
                    "q",
                    "rp",
                    "rt",
                    "ruby",
                    "s",
                    "section",
                    "small",
                    "span",
                    "strike",
                    "sub",
                    "summary",
                    "sup",
                    "td",
                    "th",
                    "tt",
                    "u",
                    "wbr",
                ],
                html5Supported: true,
                desciption: `BDI stands for Bi-Directional Isolation.

                The <bdi> tag isolates a part of text that might be formatted in a different direction from other text outside it.
                
                This element is useful when embedding user-generated content with an unknown text direction.`,
            };
            break;
        case "bdo":
            objTag = {
                tag: "<bdo></bdo>",
                name: "Bi-Directional Override",
                textContent: true,
                type: "paired",
                blockLevel: "inline",
                mainAttributes: ["dir"],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "a",
                    "abbr",
                    "acronym",
                    "address",
                    "article",
                    "aside",
                    "b",
                    "bdi",
                    "big",
                    "blockquote",
                    "body",
                    "center",
                    "cite",
                    "dd",
                    "del",
                    "dfn",
                    "dialog",
                    "div",
                    "dt",
                    "em",
                    "footer",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "i",
                    "ins",
                    "li",
                    "main",
                    "nav",
                    "p",
                    "q",
                    "rp",
                    "rt",
                    "ruby",
                    "s",
                    "section",
                    "small",
                    "span",
                    "strike",
                    "sub",
                    "summary",
                    "sup",
                    "td",
                    "th",
                    "tt",
                    "u",
                    "wbr",
                ],
                html5Supported: true,
                desciption: `BDO stands for Bi-Directional Override.

                The <bdo> tag is used to override the current text direction.`,
            };
            break;
        case "big":
            objTag = {
                tag: "<big></big>",
                name: "Big",
                textContent: true,
                type: "paired",
                blockLevel: "inline",
                mainAttributes: [],
                supportAttributes: [],
                validParent: [
                    "a",
                    "abbr",
                    "acronym",
                    "address",
                    "article",
                    "aside",
                    "b",
                    "bdi",
                    "bdo",
                    "blockquote",
                    "body",
                    "center",
                    "cite",
                    "dd",
                    "del",
                    "dfn",
                    "dialog",
                    "div",
                    "dt",
                    "em",
                    "footer",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "i",
                    "ins",
                    "li",
                    "main",
                    "nav",
                    "p",
                    "q",
                    "rp",
                    "rt",
                    "ruby",
                    "s",
                    "section",
                    "small",
                    "span",
                    "strike",
                    "sub",
                    "summary",
                    "sup",
                    "td",
                    "th",
                    "tt",
                    "u",
                    "wbr",
                ],
                html5Supported: false,
                desciption: `The <big> tag was used in HTML 4 to define bigger text.`,
            };
            break;
        case "blockquote":
            objTag = {
                tag: "<blockquote></blockquote>",
                name: "Blockquote",
                textContent: true,
                type: "paired",
                blockLevel: "block",
                mainAttributes: ["cite"],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "a",
                    "article",
                    "aside",
                    "b",
                    "body",
                    "center",
                    "dialog",
                    "div",
                    "header",
                    "footer",
                    "p",
                    "section",
                ],
                html5Supported: true,
                desciption: `The <blockquote> tag specifies a section that is quoted from another source.

                Browsers usually indent <blockquote> elements (look at example below to see how to remove the indentation).`,
            };
            break;
        case "body":
            objTag = {
                tag: "<body></body>",
                name: "Body",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "html",
                ],
                html5Supported: true,
                desciption: `The <body> tag defines the document's body.

                The <body> element contains all the contents of an HTML document, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.
                
                Note: There can only be one <body> element in an HTML document.`,
            };
            break;
        case "br":
            objTag = {
                tag: "<br>",
                name: "Break",
                textContent: false,
                type: "unpaired",
                blockLevel: "block",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "a",
                    "abbr",
                    "acronym",
                    "address",
                    "article",
                    "aside",
                    "b",
                    "bdi",
                    "bdo",
                    "big",
                    "blockquote",
                    "body",
                    "caption",
                    "center",
                    "cite",
                    "code",
                    "dd",
                    "del",
                    "details",
                    "dfn",
                    "dialog",
                    "dir",
                    "div",
                    "dl",
                    "dt",
                    "em",
                    "figcaption",
                    "figure",
                    "footer",
                    "form",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "html",
                    "i",
                    "ins",
                    "kbd",
                    "label",
                    "legend",
                    "li",
                    "main",
                    "mark",
                    "nav",
                    "p",
                    "q",
                    "rp",
                    "rt",
                    "ruby",
                    "s",
                    "samp",
                    "section",
                    "small",
                    "span",
                    "strike",
                    "strong",
                    "sup",
                    "td",
                    "th",
                    "tt",
                    "u",
                    "wbr",
                ],
                html5Supported: true,
                desciption: `The <br> tag inserts a single line break.

                The <br> tag is useful for writing addresses or poems.
                
                The <br> tag is an empty tag which means that it has no end tag.`,
            };
            break;
        case "button":
            objTag = {
                tag: "<button></button>",
                name: "Button",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [
                    "autofocus",
                    "disabled",
                    "form",
                    "formaction",
                    "formenctype",
                    "formmethod",
                    "formnovalidate",
                    "formtarget",
                    "name",
                    "type",
                    "value",
                ],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "a",
                    "abbr",
                    "acronym",
                    "address",
                    "article",
                    "aside",
                    "b",
                    "bdi",
                    "bdo",
                    "big",
                    "blockquote",
                    "body",
                    "center",
                    "cite",
                    "dd",
                    "del",
                    "dfn",
                    "dialog",
                    "div",
                    "dt",
                    "em",
                    "footer",
                    "i",
                    "ins",
                    "li",
                    "main",
                    "nav",
                    "p",
                    "q",
                    "rp",
                    "rt",
                    "ruby",
                    "s",
                    "section",
                    "small",
                    "span",
                    "strike",
                    "sub",
                    "summary",
                    "sup",
                    "td",
                    "th",
                    "tt",
                    "u",
                    "wbr",
                ],
                html5Supported: true,
                desciption: `The <button> tag defines a clickable button.

                Inside a <button> element you can put text (and tags like <i>, <b>, <strong>, <br>, <img>, etc.). That is not possible with a button created with the <input> element!
                
                Tip: Always specify the type attribute for a <button> element, to tell browsers what type of button it is.
                
                Tip: You can easily style buttons with CSS! Look at the examples below or visit our CSS Buttons tutorial.`,
            };
            break;
        case "canvas":
            objTag = {
                tag: "<canvas></canvas>",
                name: "Canvas",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: ["width", "height"],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "article",
                    "body",
                    "div",
                    "header",
                    "footer",
                    "main",
                    "section",
                ],
                html5Supported: true,
                desciption: `The <canvas> tag is used to draw graphics, on the fly, via scripting (usually JavaScript).

                The <canvas> tag is transparent, and is only a container for graphics, you must use a script to actually draw the graphics.
                
                Any text inside the <canvas> element will be displayed in browsers with JavaScript disabled and in browsers that do not support <canvas>.`,
            };
            break;
        case "caption":
            objTag = {
                tag: "<caption></caption>",
                name: "Caption",
                textContent: true,
                type: "paired",
                blockLevel: "block",
                mainAttributes: ["align"],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "table"
                ],
                html5Supported: true,
                desciption: `The <caption> tag defines a table caption.

                The <caption> tag must be inserted immediately after the <table> tag.
                
                Tip: By default, a table caption will be center-aligned above a table. However, the CSS properties text-align and caption-side can be used to align and place the caption.`,
            };
            break;
        case "center":
            objTag = {
                tag: "<center></center>",
                name: "Center",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [],
                supportAttributes: [],
                validParent: [
                    "article",
                    "body",
                    "div",
                    "header",
                    "footer",
                    "main",
                    "section"
                ],
                html5Supported: false,
                desciption: `The HTML <center> tag is used to center the text horizontally in the HTML document. Since this tag was removed in HTML5, it is recommended that you use the CSS text-align property to format the text horizontally in the document. This tag is also commonly referred to as the <center> element.`,
            };
            break;
        case "cite":
            objTag = {
                tag: "<cite></cite>",
                name: "Cite",
                textContent: true,
                type: "paired",
                blockLevel: "inline",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "a",
                    "abbr",
                    "acronym",
                    "address",
                    "article",
                    "aside",
                    "b",
                    "bdi",
                    "bdo",
                    "big",
                    "blockquote",
                    "body",
                    "center",
                    "dd",
                    "del",
                    "dfn",
                    "dialog",
                    "div",
                    "dt",
                    "em",
                    "footer",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "i",
                    "ins",
                    "li",
                    "main",
                    "nav",
                    "p",
                    "q",
                    "rp",
                    "rt",
                    "ruby",
                    "s",
                    "section",
                    "small",
                    "span",
                    "strike",
                    "sub",
                    "summary",
                    "sup",
                    "td",
                    "th",
                    "tt",
                    "u",
                    "wbr",
                ],
                html5Supported: true,
                desciption: `The <cite> tag defines the title of a creative work (e.g. a book, a poem, a song, a movie, a painting, a sculpture, etc.).

                Note: A person's name is not the title of a work.
                
                The text in the <cite> element usually renders in italic.`,
            };
            break;
        case "code":
            objTag = {
                tag: "<code></code>",
                name: "Code",
                textContent: true,
                type: "paired",
                blockLevel: "inline",
                mainAttributes: ["samp", "kbd", "var", "pre"],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "a",
                    "abbr",
                    "acronym",
                    "address",
                    "article",
                    "aside",
                    "b",
                    "bdi",
                    "bdo",
                    "big",
                    "blockquote",
                    "body",
                    "center",
                    "cite",
                    "dd",
                    "del",
                    "dfn",
                    "dialog",
                    "div",
                    "dt",
                    "em",
                    "footer",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "i",
                    "ins",
                    "li",
                    "main",
                    "nav",
                    "p",
                    "q",
                    "rp",
                    "rt",
                    "ruby",
                    "s",
                    "section",
                    "small",
                    "span",
                    "strike",
                    "sub",
                    "summary",
                    "sup",
                    "td",
                    "th",
                    "tt",
                    "u",
                    "wbr",
                ],
                html5Supported: true,
                desciption: `The <code> tag is used to define a piece of computer code. The content inside is displayed in the browser's default monospace font.

                Tip: This tag is not deprecated. However, it is possible to achieve richer effect by using CSS.`,
            };
            break;
        case "col":
            objTag = {
                tag: "<col>",
                name: "Column",
                textContent: false,
                type: "unpaired",
                blockLevel: "",
                mainAttributes: [
                    "align",
                    "bgcolor",
                    "char",
                    "charoff",
                    "span",
                    "valign",
                    "width",
                ],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "colgroup",
                ],
                html5Supported: true,
                desciption: `The <col> tag specifies column properties for each column within a <colgroup> element.

                The <col> tag is useful for applying styles to entire columns, instead of repeating the styles for each cell, for each row.`,
            };
            break;
        case "colgroup":
            objTag = {
                tag: "<colgroup></colgroup>",
                name: "Column Group",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [
                    "align",
                    "bgcolor",
                    "char",
                    "charoff",
                    "span",
                    "valign",
                    "width",
                ],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "table",
                ],
                html5Supported: true,
                desciption: `The <colgroup> tag specifies a group of one or more columns in a table for formatting.

                The <colgroup> tag is useful for applying styles to entire columns, instead of repeating the styles for each cell, for each row.
                
                Note: The <colgroup> tag must be a child of a <table> element, after any <caption> elements and before any <thead>, <tbody>, <tfoot>, and <tr> elements.
                
                Tip: To define different properties to a column within a <colgroup>, use the <col> tag within the <colgroup> tag.`,
            };
            break;
        case "data":
            objTag = {
                tag: "<data></data>",
                name: "Data",
                textContent: false,
                type: "paired",
                blockLevel: "inline",
                mainAttributes: ["value"],
                supportAttributes: globalAttributes,
                validParent: [
                    "a",
                    "abbr",
                    "acronym",
                    "address",
                    "article",
                    "aside",
                    "b",
                    "bdi",
                    "bdo",
                    "big",
                    "blockquote",
                    "body",
                    "center",
                    "cite",
                    "dd",
                    "del",
                    "dfn",
                    "dialog",
                    "div",
                    "dt",
                    "em",
                    "footer",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "i",
                    "ins",
                    "li",
                    "main",
                    "nav",
                    "p",
                    "q",
                    "rp",
                    "rt",
                    "ruby",
                    "s",
                    "section",
                    "small",
                    "span",
                    "strike",
                    "sub",
                    "summary",
                    "sup",
                    "td",
                    "th",
                    "tt",
                    "u",
                    "wbr",
                ],
                html5Supported: true,
                desciption: `The <data> tag is used to add a machine-readable translation of a given content.

                This element provides both a machine-readable value for data processors, and a human-readable value for rendering in a browser.
                
                Tip: If the content is time- or date-related, use the <time> element instead.`,
            };
            break;
        case "datalist":
            objTag = {
                tag: "<datalist></datalist>",
                name: "Datalist",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "article",
                    "body",
                    "div",
                    "main",
                    "section"
                ],
                html5Supported: true,
                desciption: `The <datalist> tag specifies a list of pre-defined options for an <input> element.

                The <datalist> tag is used to provide an "autocomplete" feature for <input> elements. Users will see a drop-down list of pre-defined options as they input data.
                
                The <datalist> element's id attribute must be equal to the <input> element's list attribute (this binds them together).`,
            };
            break;
        case "dd":
            objTag = {
                tag: "<dd></dd>",
                name: "Description Data",
                textContent: true,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "dl",
                ],
                html5Supported: true,
                desciption: `The <dd> tag is used to describe a term/name in a description list.

                The <dd> tag is used in conjunction with <dl> (defines a description list) and <dt> (defines terms/names).
                
                Inside a <dd> tag you can put paragraphs, line breaks, images, links, lists, etc.`,
            };
            break;
        case "del":
            objTag = {
                tag: "<del></del>",
                name: "Delete",
                textContent: true,
                type: "paired",
                blockLevel: "inline",
                mainAttributes: ["cite", "datetime"],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "a",
                    "abbr",
                    "acronym",
                    "address",
                    "article",
                    "aside",
                    "b",
                    "bdi",
                    "bdo",
                    "big",
                    "blockquote",
                    "body",
                    "center",
                    "cite",
                    "dd",
                    "del",
                    "dfn",
                    "dialog",
                    "div",
                    "dt",
                    "em",
                    "footer",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "i",
                    "ins",
                    "li",
                    "main",
                    "nav",
                    "p",
                    "q",
                    "rp",
                    "rt",
                    "ruby",
                    "s",
                    "section",
                    "small",
                    "span",
                    "strike",
                    "sub",
                    "summary",
                    "sup",
                    "td",
                    "th",
                    "tt",
                    "u",
                    "wbr",
                ],
                html5Supported: true,
                desciption: `The <del> tag defines text that has been deleted from a document. Browsers will usually strike a line through deleted text.`,
            };
            break;
        case "details":
            objTag = {
                tag: "<details></details>",
                name: "Details",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: ["open"],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "article",
                    "body",
                    "div",
                    "main",
                    "section"
                ],
                html5Supported: true,
                desciption: `The <details> tag specifies additional details that the user can open and close on demand.

                The <details> tag is often used to create an interactive widget that the user can open and close. By default, the widget is closed. When open, it expands, and displays the content within.
                
                Any sort of content can be put inside the <details> tag. 
                
                Tip: The <summary> tag is used in conjuction with <details> to specify a visible heading for the details.`,
            };
            break;
        case "dfn":
            objTag = {
                tag: "<dfn></dfn>",
                name: "Definition Element",
                textContent: true,
                type: "paired",
                blockLevel: "inline",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "a",
                    "abbr",
                    "acronym",
                    "address",
                    "article",
                    "aside",
                    "b",
                    "bdi",
                    "bdo",
                    "big",
                    "blockquote",
                    "body",
                    "center",
                    "cite",
                    "dd",
                    "del",
                    "dfn",
                    "dialog",
                    "div",
                    "dt",
                    "em",
                    "footer",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "i",
                    "ins",
                    "li",
                    "main",
                    "nav",
                    "p",
                    "q",
                    "rp",
                    "rt",
                    "ruby",
                    "s",
                    "section",
                    "small",
                    "span",
                    "strike",
                    "sub",
                    "summary",
                    "sup",
                    "td",
                    "th",
                    "tt",
                    "u",
                    "wbr",
                ],
                html5Supported: true,
                desciption: `The <dfn> tag stands for the "definition element", and it specifies a term that is going to be defined within the content.

                The nearest parent of the <dfn> tag must also contain the definition/explanation for the term.
                
                The term inside the <dfn> tag can be any of the following:
                
                1. Just as the content of the <dfn> element
                2. Or, with the title attribute added
                3. Or, with an <abbr> tag inside the <dfn> element
                4. Or, with the id attribute added. Then, whenever a term is used, it can refer back to the definition with an <a> tag`,
            };
            break;
        case "dialog":
            objTag = {
                tag: "<dialog></dialog>",
                name: "Dialog",
                textContent: true,
                type: "paired",
                blockLevel: "block",
                mainAttributes: ["open"],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "article",
                    "body",
                    "div",
                    "footer",
                    "header",
                    "main",
                    "section"
                ],
                html5Supported: true,
                desciption: `The <dialog> tag defines a dialog box or subwindow.

                The <dialog> element makes it easy to create popup dialogs and modals on a web page.`,
            };
            break;
        case "dir":
            objTag = {
                tag: "<dir></dir>",
                name: "Directory",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [],
                supportAttributes: [],
                validParent: [
                    "article",
                    "body",
                    "div",
                    "footer",
                    "header",
                    "main",
                    "section"
                ],
                html5Supported: false,
                desciption: `The <dir> tag was used in HTML 4 to list directory titles.`,
            };
            break;
        case "div":
            objTag = {
                tag: "<div></div>",
                name: "Division",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "article",
                    "body",
                    "div",
                    "footer",
                    "header",
                    "main",
                    "nav",
                    "section"
                ],
                html5Supported: true,
                desciption: `The <div> tag defines a division or a section in an HTML document.

                The <div> tag is used as a container for HTML elements - which is then styled with CSS or manipulated with JavaScript.
                
                The <div> tag is easily styled by using the class or id attribute.
                
                Any sort of content can be put inside the <div> tag! 
                
                Note: By default, browsers always place a line break before and after the <div> element.`,
            };
            break;
        case "dl":
            objTag = {
                tag: "<dl></dl>",
                name: "Description List",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "article",
                    "body",
                    "div",
                    "footer",
                    "header",
                    "main",
                    "section"
                ],
                html5Supported: true,
                desciption: `The <dl> tag defines a description list.

                The <dl> tag is used in conjunction with <dt> (defines terms/names) and <dd> (describes each term/name).`,
            };
            break;
        case "dt":
            objTag = {
                tag: "<dt></dt>",
                name: "Description Term",
                textContent: true,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "dl",
                ],
                html5Supported: true,
                desciption: `The <dt> tag defines a term/name in a description list.

                The <dt> tag is used in conjunction with <dl> (defines a description list) and <dd> (describes each term/name).`,
            };
            break;
        case "em":
            objTag = {
                tag: "<em></em>",
                name: "Emphasize",
                textContent: false,
                type: "paired",
                blockLevel: "inline",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "a",
                    "abbr",
                    "acronym",
                    "address",
                    "article",
                    "aside",
                    "b",
                    "bdi",
                    "bdo",
                    "big",
                    "blockquote",
                    "body",
                    "center",
                    "cite",
                    "dd",
                    "del",
                    "dfn",
                    "dialog",
                    "div",
                    "dt",
                    "em",
                    "footer",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "i",
                    "ins",
                    "li",
                    "main",
                    "nav",
                    "p",
                    "q",
                    "rp",
                    "rt",
                    "ruby",
                    "s",
                    "section",
                    "small",
                    "span",
                    "strike",
                    "sub",
                    "summary",
                    "sup",
                    "td",
                    "th",
                    "tt",
                    "u",
                    "wbr",
                ],
                html5Supported: true,
                desciption: `The <em> tag is used to define emphasized text. The content inside is typically displayed in italic.

                A screen reader will pronounce the words in <em> with an emphasis, using verbal stress.`,
            };
            break;
        case "embed":
            objTag = {
                tag: "<embed>",
                name: "Embedded",
                textContent: false,
                type: "unpaired",
                blockLevel: "block",
                mainAttributes: ["height", "src", "type", "width"],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "article",
                    "body",
                    "div",
                    "footer",
                    "header",
                    "main",
                    "nav",
                    "section"
                ],
                html5Supported: true,
                desciption: `The <embed> tag defines a container for an external resource, such as a web page, a picture, a media player, or a plug-in application.`,
            };
            break;
        case "fieldset":
            objTag = {
                tag: "<fieldset></fieldset>",
                name: "Fieldset",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: ["disabled", "form", "name"],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "form",
                ],
                html5Supported: true,
                desciption: `The <fieldset> tag is used to group related elements in a form.

                The <fieldset> tag draws a box around the related elements.`,
            };
            break;
        case "figcaption":
            objTag = {
                tag: "<figcaption></figcaption>",
                name: "Figure Caption",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "figure",
                ],
                html5Supported: true,
                desciption: `The <figcaption> tag defines a caption for a <figure> element.

                The <figcaption> element can be placed as the first or last child of the <figure> element.`,
            };
            break;
        case "figure":
            objTag = {
                tag: "<figure></figure>",
                name: "Figure",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "article",
                    "body",
                    "div",
                    "footer",
                    "header",
                    "main",
                    "section"
                ],
                html5Supported: true,
                desciption: `The <figure> tag specifies self-contained content, like illustrations, diagrams, photos, code listings, etc.

                While the content of the <figure> element is related to the main flow, its position is independent of the main flow, and if removed it should not affect the flow of the document.
                
                Tip: The <figcaption> element is used to add a caption for the <figure> element.`,
            };
            break;
        case "font":
            objTag = {
                tag: "<font></font>",
                name: "Font",
                textContent: true,
                type: "paired",
                blockLevel: "inline",
                mainAttributes: ["color", "face", "size"],
                validParent: [
                    "a",
                    "abbr",
                    "acronym",
                    "address",
                    "article",
                    "aside",
                    "b",
                    "bdi",
                    "bdo",
                    "big",
                    "blockquote",
                    "body",
                    "center",
                    "cite",
                    "dd",
                    "del",
                    "dfn",
                    "dialog",
                    "div",
                    "dt",
                    "em",
                    "footer",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "i",
                    "ins",
                    "li",
                    "main",
                    "nav",
                    "p",
                    "q",
                    "rp",
                    "rt",
                    "ruby",
                    "s",
                    "section",
                    "small",
                    "span",
                    "strike",
                    "sub",
                    "summary",
                    "sup",
                    "td",
                    "th",
                    "tt",
                    "u",
                    "wbr",
                ],
                html5Supported: false,
                supportAttributes: globalEventAttributes,
                desciption: `The <font> tag was used in HTML 4 to specify the font face, font size, and color of text.`,
            };
            break;
        case "footer":
            objTag = {
                tag: "<footer></footer>",
                name: "Footer",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "article",
                    "body",
                    "div",
                    "main",
                    "nav",
                    "section"
                ],
                html5Supported: true,
                desciption: `The <footer> tag defines a footer for a document or section.

                A <footer> element typically contains:
                
                • authorship information
                • copyright information
                • contact information
                • sitemap
                • back to top links
                • related documents
                You can have several <footer> elements in one document.`,
            };
            break;
        case "form":
            objTag = {
                tag: "<form></form>",
                name: "Form",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [
                    "accept-charset",
                    "action",
                    "autocomplete",
                    "enctype",
                    "method",
                    "name",
                    "novalidate",
                    "rel",
                    "target",
                ],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "article",
                    "body",
                    "div",
                    "footer",
                    "header",
                    "main",
                    "nav",
                    "section"
                ],
                html5Supported: true,
                desciption: `The <form> tag is used to create an HTML form for user input.

                The <form> element can contain one or more of the following form elements:
                
                • <input>
                • <textarea>
                • <button>
                • <select>
                • <option>
                • <optgroup>
                • <fieldset>
                • <label>
                • <output>`,
            };
            break;
        case "frame":
            objTag = {
                tag: "<frame></frame>",
                name: "Frame",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [],
                supportAttributes: [],
                validParent: [
                    "article",
                    "body",
                    "div",
                    "footer",
                    "header",
                    "main",
                    "nav",
                    "section"
                ],
                html5Supported: false,
                desciption: `The <frame> tag was used in HTML 4 to define one particular window (frame) within a <frameset>.`,
            };
            break;
        case "frameset":
            objTag = {
                tag: "<frameset></frameset>",
                name: "Frameset",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [],
                supportAttributes: [],
                validParent: [
                    "article",
                    "body",
                    "div",
                    "footer",
                    "header",
                    "main",
                    "nav",
                    "section"
                ],
                html5Supported: false,
                desciption: `The <frameset> tag was used in HTML 4 to define a frameset.`,
            };
            break;
        case "h1":
            objTag = {
                tag: "<h1></h1>",
                name: "Heading 1",
                textContent: true,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "article",
                    "body",
                    "div",
                    "footer",
                    "header",
                    "main",
                    "nav",
                    "section"
                ],
                html5Supported: true,
                desciption: `The <h1> to <h6> tags are used to define HTML headings.

                <h1> defines the most important heading. <h6> defines the least important heading.
                
                Note: Only use one <h1> per page - this should represent the main heading/subject for the whole page. Also, do not skip heading levels - start with <h1>, then use <h2>, and so on.`,
            };
            break;
        case "h2":
            objTag = {
                tag: "<h2></h2>",
                name: "Heading 2",
                textContent: true,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "article",
                    "body",
                    "div",
                    "footer",
                    "header",
                    "main",
                    "nav",
                    "section"
                ],
                html5Supported: true,
                desciption: `The <h1> to <h6> tags are used to define HTML headings.

                <h1> defines the most important heading. <h6> defines the least important heading.
                
                Note: Only use one <h1> per page - this should represent the main heading/subject for the whole page. Also, do not skip heading levels - start with <h1>, then use <h2>, and so on.`,
            };
            break;
        case "h3":
            objTag = {
                tag: "<h3></h3>",
                name: "Heading 3",
                textContent: true,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "article",
                    "body",
                    "div",
                    "footer",
                    "header",
                    "main",
                    "nav",
                    "section"
                ],
                html5Supported: true,
                desciption: `The <h1> to <h6> tags are used to define HTML headings.

                <h1> defines the most important heading. <h6> defines the least important heading.
                
                Note: Only use one <h1> per page - this should represent the main heading/subject for the whole page. Also, do not skip heading levels - start with <h1>, then use <h2>, and so on.`,
            };
            break;
        case "h4":
            objTag = {
                tag: "<h4></h4>",
                name: "Heading 4",
                textContent: true,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "article",
                    "body",
                    "div",
                    "footer",
                    "header",
                    "main",
                    "nav",
                    "section"
                ],
                html5Supported: true,
                desciption: `The <h1> to <h6> tags are used to define HTML headings.

                <h1> defines the most important heading. <h6> defines the least important heading.
                
                Note: Only use one <h1> per page - this should represent the main heading/subject for the whole page. Also, do not skip heading levels - start with <h1>, then use <h2>, and so on.`,
            };
            break;
        case "h5":
            objTag = {
                tag: "<h5></h5>",
                name: "Heading 5",
                textContent: true,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "article",
                    "body",
                    "div",
                    "footer",
                    "header",
                    "main",
                    "nav",
                    "section"
                ],
                html5Supported: true,
                desciption: `The <h1> to <h6> tags are used to define HTML headings.

                <h1> defines the most important heading. <h6> defines the least important heading.
                
                Note: Only use one <h1> per page - this should represent the main heading/subject for the whole page. Also, do not skip heading levels - start with <h1>, then use <h2>, and so on.`,
            };
            break;
        case "h6":
            objTag = {
                tag: "<h6></h6>",
                name: "Heading 6",
                textContent: true,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "article",
                    "body",
                    "div",
                    "footer",
                    "header",
                    "main",
                    "nav",
                    "section"
                ],
                html5Supported: true,
                desciption: `The <h1> to <h6> tags are used to define HTML headings.

                <h1> defines the most important heading. <h6> defines the least important heading.
                
                Note: Only use one <h1> per page - this should represent the main heading/subject for the whole page. Also, do not skip heading levels - start with <h1>, then use <h2>, and so on.`,
            };
            break;
        case "head":
            objTag = {
                tag: "<head></head>",
                name: "Head",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [],
                supportAttributes: globalEventAttributes,
                validParent: [
                    "html",
                ],
                html5Supported: true,
                desciption: `The <head> element is a container for metadata (data about data) and is placed between the <html> tag and the <body> tag.

                Metadata is data about the HTML document. Metadata is not displayed.
                
                Metadata typically define the document title, character set, styles, scripts, and other meta information.
                
                The following elements can go inside the <head> element:
                
                • <title> (required in every HTML document)
                • <style>
                • <base>
                • <link>
                • <meta>
                • <script>
                • <noscript>`,
            };
            break;
        case "header":
            objTag = {
                tag: "<header></header>",
                name: "Header",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "article",
                    "body",
                    "div",
                    "main",
                    "nav",
                    "section"
                ],
                html5Supported: true,
                desciption: `The <header> element represents a container for introductory content or a set of navigational links.

                A <header> element typically contains:
                
                • one or more heading elements (<h1> - <h6>)
                • logo or icon
                • authorship information
                Note: You can have several <header> elements in one HTML document. However, <header> cannot be placed within a <footer>, <address> or another <header> element.`,
            };
            break;
        case "hr":
            objTag = {
                tag: "<hr>",
                name: "Horizontal Rule",
                textContent: false,
                type: "unpaired",
                blockLevel: "block",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "article",
                    "body",
                    "div",
                    "footer",
                    "header",
                    "main",
                    "nav",
                    "section"
                ],
                html5Supported: true,
                desciption: `The <hr> tag defines a thematic break in an HTML page (e.g. a shift of topic).

                The <hr> element is most often displayed as a horizontal rule that is used to separate content (or define a change) in an HTML page.`,
            };
            break;
        case "html":
            objTag = {
                tag: "<html></html>",
                name: "HTML document",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: ["xmlns"],
                supportAttributes: globalEventAttributes,
                validParent: [''],
                html5Supported: true,
                desciption: `The <html> tag represents the root of an HTML document.

                The <html> tag is the container for all other HTML elements (except for the <!DOCTYPE> tag).
                
                Note: You should always include the lang attribute inside the <html> tag, to declare the language of the Web page. This is meant to assist search engines and browsers.`,
            };
            break;
        case "i":
            objTag = {
                tag: "<i></i>",
                name: "Italic",
                textContent: true,
                type: "paired",
                blockLevel: "inline",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "a",
                    "abbr",
                    "acronym",
                    "address",
                    "article",
                    "aside",
                    "b",
                    "bdi",
                    "bdo",
                    "big",
                    "blockquote",
                    "body",
                    "center",
                    "cite",
                    "dd",
                    "del",
                    "dfn",
                    "dialog",
                    "div",
                    "dt",
                    "em",
                    "footer",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "header",
                    "i",
                    "ins",
                    "li",
                    "main",
                    "nav",
                    "p",
                    "q",
                    "rp",
                    "rt",
                    "ruby",
                    "s",
                    "section",
                    "small",
                    "span",
                    "strike",
                    "sub",
                    "summary",
                    "sup",
                    "td",
                    "th",
                    "tt",
                    "u",
                    "wbr",
                ],
                html5Supported: true,
                desciption: `The <i> tag defines a part of text in an alternate voice or mood. The content inside is typically displayed in italic.

                The <i> tag is often used to indicate a technical term, a phrase from another language, a thought, a ship name, etc.
                
                Use the <i> element only when there is not a more appropriate semantic element, such as:
                
                • <em> (emphasized text)
                • <strong> (important text)
                • <mark> (marked/highlighted text)
                • <cite> (the title of a work)
                • <dfn> (a definition term)`,
            };
            break;
        case "iframe":
            objTag = {
                tag: "<iframe></iframe>",
                name: "Inline Frame",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [
                    "allow",
                    "allowfullscreen",
                    "allowpaymentrequest",
                    "height",
                    "loading",
                    "name",
                    "referrerpolicy",
                    "sandbox",
                    "src",
                    "srcdoc",
                    "width",
                ],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "article",
                    "body",
                    "div",
                    "footer",
                    "header",
                    "main",
                    "section"
                ],
                html5Supported: true,
                desciption: `The <iframe> tag specifies an inline frame.

                An inline frame is used to embed another document within the current HTML document.
                
                Tip: Use CSS to style the <iframe> (see example below). 
                
                Tip: It is a good practice to always include a title attribute for the <iframe>. This is used by screen readers to read out what the content of the <iframe> is.`,
            };
            break;
        case "img":
            objTag = {
                tag: "<img></img>",
                name: "Image",
                textContent: false,
                type: "unpaired",
                blockLevel: "inline",
                mainAttributes: [
                    "alt",
                    "crossorigin",
                    "height",
                    "ismap",
                    "loading",
                    "longdesc",
                    "referrerpolicy",
                    "sizes",
                    "src",
                    "srcset",
                    "usemap",
                    "width",
                ],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "a",
                    "abbr",
                    "acronym",
                    "address",
                    "article",
                    "aside",
                    "b",
                    "bdi",
                    "bdo",
                    "big",
                    "blockquote",
                    "body",
                    "center",
                    "cite",
                    "dialog",
                    "div",
                    "footer",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "header",
                    "i",
                    "ins",
                    "li",
                    "main",
                    "nav",
                    "p",
                    "q",
                    "rp",
                    "rt",
                    "ruby",
                    "s",
                    "section",
                    "small",
                    "span",
                    "strike",
                    "sub",
                    "summary",
                    "sup",
                    "td",
                    "th",
                    "tt",
                    "u",
                    "wbr",
                ],
                html5Supported: true,
                desciption: `The <img> tag is used to embed an image in an HTML page.

                Images are not technically inserted into a web page; images are linked to web pages. The <img> tag creates a holding space for the referenced image.
                
                The <img> tag has two required attributes:
                
                • src - Specifies the path to the image
                • alt - Specifies an alternate text for the image, if the image for some reason cannot be displayed
                Note: Also, always specify the width and height of an image. If width and height are not specified, the page might flicker while the image loads.
                
                Tip: To link an image to another document, simply nest the <img> tag inside an <a> tag (see example below).`,
            };
            break;
        case "input":
            objTag = {
                tag: "<input></input>",
                name: "Input",
                textContent: false,
                type: "paired",
                blockLevel: "inline",
                mainAttributes: [
                    "accept",
                    "alt",
                    "autocomplete",
                    "autofocus",
                    "checked",
                    "dirname",
                    "disabled",
                    "form",
                    "formaction",
                    "formenctype",
                    "formmethod",
                    "formnovalidate",
                    "formtarget",
                    "height",
                    "list",
                    "max",
                    "maxlength",
                    "min",
                    "minlength",
                    "multiple",
                    "name",
                    "pattern",
                    "placeholder",
                    "readonly",
                    "required",
                    "size",
                    "src",
                    "step",
                    "type",
                    "value",
                    "width",
                ],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "article",
                    "body",
                    "div",
                    "footer",
                    "header",
                    "main",
                    "nav",
                    "section"
                ],
                html5Supported: true,
                desciption: `The <input> tag specifies an input field where the user can enter data.

                The <input> element is the most important form element.
                
                The <input> element can be displayed in several ways, depending on the type attribute.
                
                The different input types are as follows:
                
                • <input type="button">
                • <input type="checkbox">
                • <input type="color">
                • <input type="date">
                • <input type="datetime-local">
                • <input type="email">
                • <input type="file">
                • <input type="hidden">
                • <input type="image">
                • <input type="month">
                • <input type="number">
                • <input type="password">
                • <input type="radio">
                • <input type="range">
                • <input type="reset">
                • <input type="search">
                • <input type="submit">
                • <input type="tel">
                • <input type="text"> (default value)
                • <input type="time">
                • <input type="url">
                • <input type="week">
                Look at the type attribute to see examples for each input type!`,
            };
            break;
        case "ins":
            objTag = {
                tag: "<ins></ins>",
                name: "Insert",
                textContent: true,
                type: "paired",
                blockLevel: "inline",
                mainAttributes: ["cite", "datetime"],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "a",
                    "abbr",
                    "acronym",
                    "address",
                    "article",
                    "aside",
                    "b",
                    "bdi",
                    "bdo",
                    "big",
                    "blockquote",
                    "body",
                    "center",
                    "cite",
                    "dd",
                    "del",
                    "dfn",
                    "dialog",
                    "div",
                    "dt",
                    "em",
                    "footer",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "header",
                    "i",
                    "li",
                    "main",
                    "nav",
                    "p",
                    "q",
                    "rp",
                    "rt",
                    "ruby",
                    "s",
                    "section",
                    "small",
                    "span",
                    "strike",
                    "sub",
                    "summary",
                    "sup",
                    "td",
                    "th",
                    "tt",
                    "u",
                    "wbr",
                ],
                html5Supported: true,
                desciption: `The <ins> tag defines a text that has been inserted into a document. Browsers will usually underline inserted text.

                Tip: Also look at the <del> tag to markup deleted text.`,
            };
            break;
        case "kbd":
            objTag = {
                tag: "<kbd></kbd>",
                name: "Keyboard Input",
                textContent: false,
                type: "paired",
                blockLevel: "inline",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "a",
                    "abbr",
                    "acronym",
                    "address",
                    "article",
                    "aside",
                    "b",
                    "bdi",
                    "bdo",
                    "big",
                    "blockquote",
                    "body",
                    "center",
                    "cite",
                    "dd",
                    "del",
                    "dfn",
                    "dialog",
                    "div",
                    "dt",
                    "em",
                    "footer",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "header",
                    "i",
                    "ins",
                    "li",
                    "main",
                    "nav",
                    "p",
                    "q",
                    "rp",
                    "rt",
                    "ruby",
                    "s",
                    "section",
                    "small",
                    "span",
                    "strike",
                    "sub",
                    "summary",
                    "sup",
                    "td",
                    "th",
                    "tt",
                    "u",
                    "wbr",
                ],
                html5Supported: true,
                desciption: `The <kbd> tag is used to define keyboard input. The content inside is displayed in the browser's default monospace font.

                Tip: This tag is not deprecated. However, it is possible to achieve richer effect by using CSS (see example below).`,
            };
            break;
        case "label":
            objTag = {
                tag: "<label></label>",
                name: "Label",
                textContent: false,
                type: "paired",
                blockLevel: "inline",
                mainAttributes: ["for", "form"],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "form",
                    "input",
                    "meter",
                    "progress",
                    "select",
                    "textarea"
                ],
                html5Supported: true,
                desciption: `The <label> tag defines a label for several elements:

                • <input type="checkbox">
                • <input type="color">
                • <input type="date">
                • <input type="datetime-local">
                • <input type="email">
                • <input type="file">
                • <input type="month">
                • <input type="number">
                • <input type="password">
                • <input type="radio">
                • <input type="range">
                • <input type="search">
                • <input type="tel">
                • <input type="text">
                • <input type="time">
                • <input type="url">
                • <input type="week">
                • <meter>
                • <progress>
                • <select>
                • <textarea>
                Proper use of labels with the elements above will benefit:
                
                • Screen reader users (will read out loud the label, when the user is focused on the element)
                • Users who have difficulty clicking on very small regions (such as checkboxes) - because when a user clicks the text within the <label> element, it toggles the input (this increases the hit area).`,
            };
            break;
        case "legend":
            objTag = {
                tag: "<legend></legend>",
                name: "Legend",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "fieldset",
                ],
                html5Supported: true,
                desciption: `The <legend> tag defines a caption for the <fieldset> element.`,
            };
            break;
        case "li":
            objTag = {
                tag: "<li></li>",
                name: "List Item",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: ["value"],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "ol",
                    "ul",
                ],
                html5Supported: true,
                desciption: `The <li> tag defines a list item.

                The <li> tag is used inside ordered lists(<ol>), unordered lists (<ul>), and in menu lists (<menu>).
                
                In <ul> and <menu>, the list items will usually be displayed with bullet points.
                
                In <ol>, the list items will usually be displayed with numbers or letters.
                
                Tip: Use CSS to style lists.`,
            };
            break;
        case "link":
            objTag = {
                tag: "<link></link>",
                name: "Link",
                textContent: false,
                type: "unpaired",
                blockLevel: "block",
                mainAttributes: [
                    "crossorigin",
                    "href",
                    "hreflang",
                    "media",
                    "referrerpolicy",
                    "rel",
                    "sizes",
                    "title",
                    "type",
                ],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "head",
                ],
                html5Supported: true,
                desciption: `The <link> tag defines the relationship between the current document and an external resource.

                The <link> tag is most often used to link to external style sheets.
                
                The <link> element is an empty element, it contains attributes only.`,
            };
            break;
        case "main":
            objTag = {
                tag: "<main></main>",
                name: "Main",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "body",
                    "div",
                ],
                html5Supported: true,
                desciption: `The <main> tag specifies the main content of a document.

                The content inside the <main> element should be unique to the document. It should not contain any content that is repeated across documents such as sidebars, navigation links, copyright information, site logos, and search forms.
                
                Note: There must not be more than one <main> element in a document. The <main> element must NOT be a descendant of an <article>, <aside>, <footer>, <header>, or <nav> element.`,
            };
            break;
        case "map":
            objTag = {
                tag: "<map></map>",
                name: "Map",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: ["name"],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "article",
                    "body",
                    "div",
                    "footer",
                    "header",
                    "main",
                    "nav",
                    "section"
                ],
                html5Supported: true,
                desciption: `The <map> tag is used to define an image map. An image map is an image with clickable areas.

                The required name attribute of the <map> element is associated with the <img>'s usemap attribute and creates a relationship between the image and the map.
                
                The <map> element contains a number of <area> elements, that defines the clickable areas in the image map.`,
            };
            break;
        case "mark":
            objTag = {
                tag: "<mark></mark>",
                name: "Mark",
                textContent: false,
                type: "paired",
                blockLevel: "inline",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "a",
                    "abbr",
                    "acronym",
                    "address",
                    "article",
                    "aside",
                    "b",
                    "bdi",
                    "bdo",
                    "big",
                    "blockquote",
                    "body",
                    "center",
                    "cite",
                    "dd",
                    "del",
                    "dfn",
                    "dialog",
                    "div",
                    "dt",
                    "em",
                    "footer",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "header",
                    "i",
                    "ins",
                    "li",
                    "main",
                    "nav",
                    "p",
                    "q",
                    "rp",
                    "rt",
                    "ruby",
                    "s",
                    "section",
                    "small",
                    "span",
                    "strike",
                    "sub",
                    "summary",
                    "sup",
                    "td",
                    "th",
                    "tt",
                    "u",
                    "wbr",
                ],
                html5Supported: true,
                desciption: `The <mark> tag defines text that should be marked or highlighted.`,
            };
            break;
        case "meta":
            objTag = {
                tag: "<meta>",
                name: "Meta",
                textContent: false,
                type: "unpaired",
                blockLevel: "",
                mainAttributes: ["charset", "content", "http-equiv", "name"],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "head",
                ],
                html5Supported: true,
                desciption: `The <meta> tag defines metadata about an HTML document. Metadata is data (information) about data.

                <meta> tags always go inside the <head> element, and are typically used to specify character set, page description, keywords, author of the document, and viewport settings.
                
                Metadata will not be displayed on the page, but is machine parsable.
                
                Metadata is used by browsers (how to display content or reload page), search engines (keywords), and other web services.
                
                There is a method to let web designers take control over the viewport (the user's visible area of a web page), through the <meta> tag (See "Setting The Viewport" example below).`,
            };
            break;
        case "meter":
            objTag = {
                tag: "<meter></meter>",
                name: "Meter",
                textContent: false,
                type: "paired",
                blockLevel: "inline",
                mainAttributes: [
                    "form",
                    "high",
                    "low",
                    "max",
                    "min",
                    "optimum",
                    "value",
                ],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "article",
                    "body",
                    "div",
                    "footer",
                    "header",
                    "main",
                    "nav",
                    "section"
                ],
                html5Supported: true,
                desciption: `The <meter> tag defines a scalar measurement within a known range, or a fractional value. This is also known as a gauge.

                Examples: Disk usage, the relevance of a query result, etc.
                
                Note: The <meter> tag should not be used to indicate progress (as in a progress bar). For progress bars, use the <progress> tag.
                
                Tip: Always add the <label> tag for best accessibility practices!`,
            };
            break;
        case "nav":
            objTag = {
                tag: "<nav></nav>",
                name: "Navigation",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "article",
                    "body",
                    "div",
                    "footer",
                    "header",
                    "main",
                    "section"
                ],
                html5Supported: true,
                desciption: `The <nav> tag defines a set of navigation links.

                Notice that NOT all links of a document should be inside a <nav> element. The <nav> element is intended only for major block of navigation links.
                
                Browsers, such as screen readers for disabled users, can use this element to determine whether to omit the initial rendering of this content.`,
            };
            break;
        case "noframes":
            objTag = {
                tag: "<noframes></noframes>",
                name: "No Frames",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [],
                supportAttributes: [],
                validParent: [
                    "article",
                    "body",
                    "div",
                    "footer",
                    "header",
                    "main",
                    "nav",
                    "section"
                ],
                html5Supported: false,
                desciption: `The <noframes> tag was used in HTML 4 to act as a fallback tag for browsers that did not support frames.`,
            };
            break;
        case "noscript":
            objTag = {
                tag: "<noscript></noscript>",
                name: "No Script",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [],
                supportAttributes: globalAttributes,
                validParent: [
                    "article",
                    "body",
                    "div",
                    "footer",
                    "header",
                    "main",
                    "nav",
                    "section"
                ],
                html5Supported: true,
                desciption: `The <noscript> tag defines an alternate content to be displayed to users that have disabled scripts in their browser or have a browser that doesn't support script.

                The <noscript> element can be used in both <head> and <body>. When used inside <head>, the <noscript> element could only contain <link>, <style>, and <meta> elements.`,
            };
            break;
        case "object":
            objTag = {
                tag: "<object></object>",
                name: "Object",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [
                    "data",
                    "form",
                    "height",
                    "name",
                    "type",
                    "typemustmatch",
                    "usemap",
                    "width",
                ],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "article",
                    "body",
                    "div",
                    "footer",
                    "header",
                    "main",
                    "nav",
                    "section"
                ],
                html5Supported: true,
                desciption: `The <object> tag defines a container for an external resource.

                The external resource can be a web page, a picture, a media player, or a plug-in application.`,
            };
            break;
        case "ol":
            objTag = {
                tag: "<ol></ol>",
                name: "Ordered List",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: ["reversed", "start", "type"],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "article",
                    "body",
                    "div",
                    "footer",
                    "header",
                    "main",
                    "nav",
                    "section"
                ],
                html5Supported: true,
                desciption: `The <ol> tag defines an ordered list. An ordered list can be numerical or alphabetical.

                The <li> tag is used to define each list item.
                
                Tip: Use CSS to style lists.
                
                Tip: For unordered list, use the <ul> tag.`,
            };
            break;
        case "optgroup":
            objTag = {
                tag: "<optgroup></optgroup>",
                name: "Options Group",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: ["disabled", "label"],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "select",
                ],
                html5Supported: true,
                desciption: `The <optgroup> tag is used to group related options in a <select> element (drop-down list).

                If you have a long list of options, groups of related options are easier to handle for a user.`,
            };
            break;
        case "option":
            objTag = {
                tag: "<option></option>",
                name: "Option",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: ["disabled", "label", "selected", "value"],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "optgroup",
                    "select",
                ],
                html5Supported: true,
                desciption: `The <option> tag defines an option in a select list.

                <option> elements go inside a <select>, <optgroup>, or <datalist> element.
                
                Note: The <option> tag can be used without any attributes, but you usually need the value attribute, which indicates what is sent to the server on form submission.
                
                Tip: If you have a long list of options, you can group related options within the <optgroup> tag.`,
            };
            break;
        case "output":
            objTag = {
                tag: "<output></output>",
                name: "Output",
                textContent: false,
                type: "paired",
                blockLevel: "inline",
                mainAttributes: ["for", "form", "name"],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "a",
                    "abbr",
                    "acronym",
                    "address",
                    "article",
                    "aside",
                    "b",
                    "bdi",
                    "bdo",
                    "big",
                    "blockquote",
                    "body",
                    "center",
                    "cite",
                    "dd",
                    "del",
                    "dfn",
                    "dialog",
                    "div",
                    "dt",
                    "em",
                    "footer",
                    "form",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "header",
                    "i",
                    "ins",
                    "li",
                    "main",
                    "nav",
                    "p",
                    "q",
                    "rp",
                    "rt",
                    "ruby",
                    "s",
                    "section",
                    "small",
                    "span",
                    "strike",
                    "sub",
                    "summary",
                    "sup",
                    "td",
                    "th",
                    "tt",
                    "u",
                    "wbr",
                ],
                html5Supported: true,
                desciption: `The <output> tag is used to represent the result of a calculation (like one performed by a script).`,
            };
            break;
        case "p":
            objTag = {
                tag: "<p></p>",
                name: "Paragraph",
                textContent: true,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "a",
                    "article",
                    "body",
                    "div",
                    "footer",
                    "header",
                    "main",
                    "nav",
                    "section"
                ],
                html5Supported: true,
                desciption: `The <p> tag defines a paragraph.

                Browsers automatically add a single blank line before and after each <p> element.
                
                Tip: Use CSS to style paragraphs.`,
            };
            break;
        case "param":
            objTag = {
                tag: "<param>",
                name: "Parameters",
                textContent: false,
                type: "unpaired",
                blockLevel: "",
                mainAttributes: ["name", "value"],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "object",
                ],
                html5Supported: true,
                desciption: `The <param> tag is used to define parameters for an <object> element.`,
            };
            break;
        case "picture":
            objTag = {
                tag: "<picture></picture>",
                name: "Picture",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "article",
                    "body",
                    "div",
                    "footer",
                    "header",
                    "main",
                    "nav",
                    "section"
                ],
                html5Supported: true,
                desciption: `The <picture> tag gives web developers more flexibility in specifying image resources.

                The most common use of the <picture> element will be for art direction in responsive designs. Instead of having one image that is scaled up or down based on the viewport width, multiple images can be designed to more nicely fill the browser viewport.
                
                The <picture> element contains two tags: one or more <source> tags and one <img> tag.
                
                The browser will look for the first <source> element where the media query matches the current viewport width, and then it will display the proper image (specified in the srcset attribute). The <img> element is required as the last child of the <picture> element, as a fallback option if none of the source tags matches.
                
                Tip: The <picture> element works "similar" to <video> and <audio>. You set up different sources, and the first source that fits the preferences is the one being used.`,
            };
            break;
        case "pre":
            objTag = {
                tag: "<pre></pre>",
                name: "Preserve",
                textContent: true,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "article",
                    "body",
                    "div",
                    "footer",
                    "header",
                    "main",
                    "nav",
                    "section"
                ],
                html5Supported: true,
                desciption: `The <pre> tag defines preformatted text.

                Text in a <pre> element is displayed in a fixed-width font, and the text preserves both spaces and line breaks. The text will be displayed exactly as written in the HTML source code.`,
            };
            break;
        case "progress":
            objTag = {
                tag: "<progress></progress>",
                name: "Progress",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: ["max", "value"],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "article",
                    "body",
                    "div",
                    "footer",
                    "header",
                    "main",
                    "nav",
                    "p",
                    "section"
                ],
                html5Supported: true,
                desciption: `The <progress> tag represents the completion progress of a task.

                Tip: Always add the <label> tag for best accessibility practices!`,
            };
            break;
        case "q":
            objTag = {
                tag: "<q></q>",
                name: "Quotation",
                textContent: false,
                type: "paired",
                blockLevel: "inline",
                mainAttributes: ["cite"],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "a",
                    "abbr",
                    "acronym",
                    "address",
                    "article",
                    "aside",
                    "b",
                    "bdi",
                    "bdo",
                    "big",
                    "blockquote",
                    "body",
                    "center",
                    "cite",
                    "dd",
                    "del",
                    "dfn",
                    "dialog",
                    "div",
                    "dt",
                    "em",
                    "footer",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "header",
                    "i",
                    "ins",
                    "li",
                    "main",
                    "nav",
                    "p",
                    "q",
                    "rp",
                    "rt",
                    "ruby",
                    "s",
                    "section",
                    "small",
                    "span",
                    "strike",
                    "sub",
                    "summary",
                    "sup",
                    "td",
                    "th",
                    "tt",
                    "u",
                    "wbr",
                ],
                html5Supported: true,
                desciption: `The <q> tag defines a short quotation.

                Browsers normally insert quotation marks around the quotation.
                
                Tip: Use <blockquote> for long quotations.`,
            };
            break;
        case "rp":
            objTag = {
                tag: "<rp></rp>",
                name: "Ruby Parentheses",
                textContent: true,
                type: "paired",
                blockLevel: "inline",
                mainAttributes: [],
                supportAttributes: [],
                validParent: [
                    "rt",
                    "ruby",
                ],
                html5Supported: true,
                desciption: `The <rp> tag can be used to provide parentheses around a ruby text, to be shown by browsers that do not support ruby annotations.

                Use <rp> together with <ruby> and <rt>: The <ruby> element consists of one or more characters that needs an explanation/pronunciation, and an <rt> element that gives that information, and an optional <rp> element that defines what to show for browsers that not support ruby annotations.`,
            };
            break;
        case "rt":
            objTag = {
                tag: "<rt></rt>",
                name: "Ruby Typography",
                textContent: true,
                type: "paired",
                blockLevel: "inline",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "ruby",
                ],
                html5Supported: true,
                desciption: `The <rt> tag defines an explanation or pronunciation of characters (for East Asian typography) in a ruby annotation.

                Use <rt> together with <ruby> and <rp>: The <ruby> element consists of one or more characters that needs an explanation/pronunciation, and an <rt> element that gives that information, and an optional <rp> element that defines what to show for browsers that not support ruby annotations.`,
            };
            break;
        case "ruby":
            objTag = {
                tag: "<ruby></ruby>",
                name: "Ruby",
                textContent: true,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "article",
                    "body",
                    "div",
                    "footer",
                    "header",
                    "main",
                    "nav",
                    "section"
                ],
                html5Supported: true,
                desciption: `The <ruby> tag specifies a ruby annotation.

                A ruby annotation is a small extra text, attached to the main text to indicate the pronunciation or meaning of the corresponding characters. This kind of annotation is often used in Japanese publications.
                
                Use <ruby> together with <rt> and <rp>: The <ruby> element consists of one or more characters that needs an explanation/pronunciation, and an <rt> element that gives that information, and an optional <rp> element that defines what to show for browsers that do not support ruby annotations.`,
            };
            break;
        case "s":
            objTag = {
                tag: "<s></s>",
                name: "Specifies",
                textContent: true,
                type: "paired",
                blockLevel: "inline",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "a",
                    "abbr",
                    "acronym",
                    "address",
                    "article",
                    "aside",
                    "b",
                    "bdi",
                    "bdo",
                    "big",
                    "blockquote",
                    "body",
                    "center",
                    "cite",
                    "dd",
                    "del",
                    "dfn",
                    "dialog",
                    "div",
                    "dt",
                    "em",
                    "footer",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "header",
                    "i",
                    "ins",
                    "li",
                    "main",
                    "nav",
                    "p",
                    "q",
                    "rp",
                    "rt",
                    "ruby",
                    "section",
                    "small",
                    "span",
                    "strike",
                    "sub",
                    "summary",
                    "sup",
                    "td",
                    "th",
                    "tt",
                    "u",
                    "wbr",
                ],
                html5Supported: true,
                desciption: `The <s> tag specifies text that is no longer correct, accurate or relevant. The text will be displayed with a line through it.

                The <s> tag should not be used to define deleted text in a document, use the <del> tag for that.`,
            };
            break;
        case "samp":
            objTag = {
                tag: "<samp></samp>",
                name: "Samp",
                textContent: true,
                type: "paired",
                blockLevel: "inline",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "a",
                    "abbr",
                    "acronym",
                    "address",
                    "article",
                    "aside",
                    "b",
                    "bdi",
                    "bdo",
                    "big",
                    "blockquote",
                    "body",
                    "center",
                    "cite",
                    "dd",
                    "del",
                    "dfn",
                    "dialog",
                    "div",
                    "dt",
                    "em",
                    "footer",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "header",
                    "i",
                    "ins",
                    "li",
                    "main",
                    "nav",
                    "p",
                    "q",
                    "rp",
                    "rt",
                    "ruby",
                    "s",
                    "section",
                    "small",
                    "span",
                    "strike",
                    "sub",
                    "summary",
                    "sup",
                    "td",
                    "th",
                    "tt",
                    "u",
                    "wbr",
                ],
                html5Supported: true,
                desciption: `The <samp> tag is used to define sample output from a computer program. The content inside is displayed in the browser's default monospace font.

                Tip: This tag is not deprecated. However, it is possible to achieve richer effect by using CSS.`,
            };
            break;
        case "script":
            objTag = {
                tag: "<script></script>",
                name: "Script",
                textContent: false,
                type: "paired",
                blockLevel: "",
                mainAttributes: [
                    "async",
                    "crossorigin",
                    "defer",
                    "integrity",
                    "nomodule",
                    "referrerpolicy",
                    "src",
                    "type",
                ],
                supportAttributes: globalEventAttributes,
                validParent: [
                    "article",
                    "body",
                    "div",
                    "footer",
                    "header",
                    "main",
                    "nav",
                    "section"
                ],
                html5Supported: true,
                desciption: `The <script> tag is used to embed a client-side script (JavaScript).

                The <script> element either contains scripting statements, or it points to an external script file through the src attribute.
                
                Common uses for JavaScript are image manipulation, form validation, and dynamic changes of content.`,
            };
            break;
        case "section":
            objTag = {
                tag: "<section></section>",
                name: "Section",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "article",
                    "body",
                    "div",
                    "footer",
                    "header",
                    "main",
                    "nav",
                ],
                html5Supported: true,
                desciption: `The <section> tag defines a section in a document.`,
            };
            break;
        case "select":
            objTag = {
                tag: "<select></select>",
                name: "Select",
                textContent: false,
                type: "paired",
                blockLevel: "inline",
                mainAttributes: [
                    "autofocus",
                    "disabled",
                    "form",
                    "multiple",
                    "name",
                    "required",
                    "size",
                ],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "article",
                    "body",
                    "div",
                    "footer",
                    "header",
                    "main",
                    "nav",
                    "section"
                ],
                html5Supported: true,
                desciption: `The <select> element is used to create a drop-down list.

                The <select> element is most often used in a form, to collect user input.
                
                The name attribute is needed to reference the form data after the form is submitted (if you omit the name attribute, no data from the drop-down list will be submitted).
                
                The id attribute is needed to associate the drop-down list with a label.
                
                The <option> tags inside the <select> element define the available options in the drop-down list.
                
                Tip: Always add the <label> tag for best accessibility practices!`,
            };
            break;
        case "small":
            objTag = {
                tag: "<small></small>",
                name: "Small",
                textContent: true,
                type: "paired",
                blockLevel: "inline",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "a",
                    "abbr",
                    "acronym",
                    "address",
                    "article",
                    "aside",
                    "b",
                    "bdi",
                    "bdo",
                    "big",
                    "blockquote",
                    "body",
                    "center",
                    "cite",
                    "dd",
                    "del",
                    "dfn",
                    "dialog",
                    "div",
                    "dt",
                    "em",
                    "footer",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "header",
                    "i",
                    "ins",
                    "li",
                    "main",
                    "nav",
                    "p",
                    "q",
                    "rp",
                    "rt",
                    "ruby",
                    "s",
                    "section",
                    "span",
                    "strike",
                    "sub",
                    "summary",
                    "sup",
                    "td",
                    "th",
                    "tt",
                    "u",
                    "wbr",
                ],
                html5Supported: true,
                desciption: `The <small> tag defines smaller text (like copyright and other side-comments).

                Tip: This tag is not deprecated, but it is possible to achieve richer (or the same) effect with CSS.`,
            };
            break;
        case "source":
            objTag = {
                tag: "<source></source>",
                name: "Source",
                textContent: false,
                type: "paired",
                blockLevel: "",
                mainAttributes: ["media", "sizes", "src", "srcset", "type"],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "audio",
                    "picture",
                    "video",
                ],
                html5Supported: true,
                desciption: `The <source> tag is used to specify multiple media resources for media elements, such as <video>, <audio>, and <picture>.

                The <source> tag allows you to specify alternative video/audio/image files which the browser may choose from, based on browser support or viewport width. The browser will choose the first <source> it supports.`,
            };
            break;
        case "span":
            objTag = {
                tag: "<span></span>",
                name: "Span",
                textContent: true,
                type: "paired",
                blockLevel: "inline",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "a",
                    "abbr",
                    "acronym",
                    "address",
                    "article",
                    "aside",
                    "b",
                    "bdi",
                    "bdo",
                    "big",
                    "blockquote",
                    "body",
                    "center",
                    "cite",
                    "dd",
                    "del",
                    "dfn",
                    "dialog",
                    "div",
                    "dt",
                    "em",
                    "footer",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "header",
                    "i",
                    "ins",
                    "li",
                    "main",
                    "nav",
                    "p",
                    "q",
                    "rp",
                    "rt",
                    "ruby",
                    "s",
                    "section",
                    "small",
                    "strike",
                    "sub",
                    "summary",
                    "sup",
                    "td",
                    "th",
                    "tt",
                    "u",
                    "wbr",
                ],
                html5Supported: true,
                desciption: `The <span> tag is an inline container used to mark up a part of a text, or a part of a document.

                The <span> tag is easily styled by CSS or manipulated with JavaScript using the class or id attribute.
                
                The <span> tag is much like the <div> element, but <div> is a block-level element and <span> is an inline element.`,
            };
            break;
        case "strike":
            objTag = {
                tag: "<strike></strike>",
                name: "Strike",
                textContent: true,
                type: "paired",
                blockLevel: "inline",
                mainAttributes: [],
                supportAttributes: globalEventAttributes,
                validParent: [
                    "a",
                    "abbr",
                    "acronym",
                    "address",
                    "article",
                    "aside",
                    "b",
                    "bdi",
                    "bdo",
                    "big",
                    "blockquote",
                    "body",
                    "center",
                    "cite",
                    "dd",
                    "del",
                    "dfn",
                    "dialog",
                    "div",
                    "dt",
                    "em",
                    "footer",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "header",
                    "i",
                    "ins",
                    "li",
                    "main",
                    "nav",
                    "p",
                    "q",
                    "rp",
                    "rt",
                    "ruby",
                    "s",
                    "section",
                    "small",
                    "span",
                    "sub",
                    "summary",
                    "sup",
                    "td",
                    "th",
                    "tt",
                    "u",
                    "wbr",
                ],
                html5Supported: false,
                desciption: `The <strike> tag was used in HTML 4 to define strikethrough text.`,
            };
            break;
        case "strong":
            objTag = {
                tag: "<strong></strong>",
                name: "Strong",
                textContent: true,
                type: "paired",
                blockLevel: "inline",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "a",
                    "abbr",
                    "acronym",
                    "address",
                    "article",
                    "aside",
                    "b",
                    "bdi",
                    "bdo",
                    "big",
                    "blockquote",
                    "body",
                    "center",
                    "cite",
                    "dd",
                    "del",
                    "dfn",
                    "dialog",
                    "div",
                    "dt",
                    "em",
                    "footer",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "header",
                    "i",
                    "ins",
                    "li",
                    "main",
                    "nav",
                    "p",
                    "q",
                    "rp",
                    "rt",
                    "ruby",
                    "s",
                    "section",
                    "small",
                    "span",
                    "strike",
                    "sub",
                    "summary",
                    "sup",
                    "td",
                    "th",
                    "tt",
                    "u",
                    "wbr",
                ],
                html5Supported: true,
                desciption: `The <strong> tag is used to define text with strong importance. The content inside is typically displayed in bold.

                Tip: Use the <b> tag to specify bold text without any extra importance!`,
            };
            break;
        case "style":
            objTag = {
                tag: "<style></style>",
                name: "Style",
                textContent: false,
                type: "paired",
                blockLevel: "",
                mainAttributes: ["media", "type"],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "head",
                    "body",
                ],
                html5Supported: true,
                desciption: `The <style> tag is used to define style information (CSS) for a document.

                Inside the <style> element you specify how HTML elements should render in a browser.`,
            };
            break;
        case "sub":
            objTag = {
                tag: "<sub></sub>",
                name: "Subscript",
                textContent: true,
                type: "paired",
                blockLevel: "inline",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "a",
                    "abbr",
                    "acronym",
                    "address",
                    "article",
                    "aside",
                    "b",
                    "bdi",
                    "bdo",
                    "big",
                    "blockquote",
                    "body",
                    "center",
                    "cite",
                    "dd",
                    "del",
                    "dfn",
                    "dialog",
                    "div",
                    "dt",
                    "em",
                    "footer",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "header",
                    "i",
                    "ins",
                    "li",
                    "main",
                    "nav",
                    "p",
                    "q",
                    "rp",
                    "rt",
                    "ruby",
                    "s",
                    "section",
                    "small",
                    "span",
                    "strike",
                    "summary",
                    "sup",
                    "strong",
                    "td",
                    "th",
                    "tt",
                    "u",
                    "wbr",
                ],
                html5Supported: true,
                desciption: `The <sub> tag defines subscript text. Subscript text appears half a character below the normal line, and is sometimes rendered in a smaller font. Subscript text can be used for chemical formulas, like H2O.

                Tip: Use the <sup> tag to define superscripted text.`,
            };
            break;
        case "summary":
            objTag = {
                tag: "<summary></summary>",
                name: "Summary",
                textContent: true,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "details",
                ],
                html5Supported: true,
                desciption: `The <summary> tag defines a visible heading for the <details> element. The heading can be clicked to view/hide the details.

                Note: The <summary> element should be the first child element of the <details> element.`,
            };
            break;
        case "sup":
            objTag = {
                tag: "<sup></sup>",
                name: "Superscript",
                textContent: true,
                type: "paired",
                blockLevel: "inline",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "a",
                    "abbr",
                    "acronym",
                    "address",
                    "article",
                    "aside",
                    "b",
                    "bdi",
                    "bdo",
                    "big",
                    "blockquote",
                    "body",
                    "center",
                    "cite",
                    "dd",
                    "del",
                    "dfn",
                    "dialog",
                    "div",
                    "dt",
                    "em",
                    "footer",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "header",
                    "i",
                    "ins",
                    "li",
                    "main",
                    "nav",
                    "p",
                    "q",
                    "rp",
                    "rt",
                    "ruby",
                    "s",
                    "section",
                    "small",
                    "span",
                    "strike",
                    "sub",
                    "summary",
                    "strong",
                    "td",
                    "th",
                    "tt",
                    "u",
                    "wbr",
                ],
                html5Supported: true,
                desciption: `The <sup> tag defines superscript text. Superscript text appears half a character above the normal line, and is sometimes rendered in a smaller font. Superscript text can be used for footnotes, like WWW[1].

                Tip: Use the <sub> tag to define subscript text.`,
            };
            break;
        case "svg":
            objTag = {
                tag: "<svg></svg>",
                name: "Scalable Vector Graphics",
                textContent: false,
                type: "paired",
                blockLevel: "inline",
                mainAttributes: [],
                supportAttributes: [],
                validParent: [
                    "article",
                    "body",
                    "div",
                    "footer",
                    "header",
                    "main",
                    "nav",
                    "section"
                ],
                html5Supported: true,
                desciption: `The <svg> tag defines a container for SVG graphics.

                SVG has several methods for drawing paths, boxes, circles, text, and graphic images.`,
            };
            break;
        case "table":
            objTag = {
                tag: "<table></table>",
                name: "Table",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "article",
                    "body",
                    "div",
                    "footer",
                    "header",
                    "main",
                    "nav",
                    "section"
                ],
                html5Supported: true,
                desciption: `The <table> tag defines an HTML table.

                An HTML table consists of one <table> element and one or more <tr>, <th>, and <td> elements.
                
                The <tr> element defines a table row, the <th> element defines a table header, and the <td> element defines a table cell.
                
                An HTML table may also include <caption>, <colgroup>, <thead>, <tfoot>, and <tbody> elements.`,
            };
            break;
        case "tbody":
            objTag = {
                tag: "<tbody></tbody>",
                name: "Table Body",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "table",
                ],
                html5Supported: true,
                desciption: `The <tbody> tag is used to group the body content in an HTML table.

                The <tbody> element is used in conjunction with the <thead> and <tfoot> elements to specify each part of a table (body, header, footer).
                
                Browsers can use these elements to enable scrolling of the table body independently of the header and footer. Also, when printing a large table that spans multiple pages, these elements can enable the table header and footer to be printed at the top and bottom of each page.
                
                Note: The <tbody> element must have one or more <tr> tags inside.
                
                The <tbody> tag must be used in the following context: As a child of a <table> element, after any <caption>, <colgroup>, and <thead> elements.
                
                Tip: The <thead>, <tbody>, and <tfoot> elements will not affect the layout of the table by default. However, you can use CSS to style these elements (see example below)!`,
            };
            break;
        case "td":
            objTag = {
                tag: "<td></td>",
                name: "Table Data",
                textContent: true,
                type: "paired",
                blockLevel: "block",
                mainAttributes: ["colspan", "headers", "rowspan"],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "tr",
                ],
                html5Supported: true,
                desciption: `The <td> tag defines a standard data cell in an HTML table.

                An HTML table has two kinds of cells:
                
                Header cells - contains header information (created with the <th> element)
                Data cells - contains data (created with the <td> element)
                The text in <td> elements are regular and left-aligned by default.
                
                The text in <th> elements are bold and centered by default.`,
            };
            break;
        case "template":
            objTag = {
                tag: "<template></template>",
                name: "Template",
                textContent: false,
                type: "paired",
                blockLevel: "",
                mainAttributes: [],
                supportAttributes: globalEventAttributes,
                validParent: [
                    "article",
                    "body",
                    "div",
                    "footer",
                    "header",
                    "main",
                    "nav",
                    "section"
                ],
                html5Supported: true,
                desciption: `The <template> tag is used as a container to hold some HTML content hidden from the user when the page loads.

                The content inside <template> can be rendered later with a JavaScript.
                
                You can use the <template> tag if you have some HTML code you want to use over and over again, but not until you ask for it. To do this without the <template> tag, you have to create the HTML code with JavaScript to prevent the browser from rendering the code.`,
            };
            break;
        case "textarea":
            objTag = {
                tag: "<textarea></textarea>",
                name: "Textarea",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [
                    "autofocus",
                    "cols",
                    "dirname",
                    "disabled",
                    "form",
                    "maxlength",
                    "name",
                    "placeholder",
                    "readonly",
                    "required",
                    "rows",
                    "wrap",
                ],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "article",
                    "body",
                    "div",
                    "footer",
                    "header",
                    "main",
                    "nav",
                    "section"
                ],
                html5Supported: true,
                desciption: `The <textarea> tag defines a multi-line text input control.

                The <textarea> element is often used in a form, to collect user inputs like comments or reviews.
                
                A text area can hold an unlimited number of characters, and the text renders in a fixed-width font (usually Courier).
                
                The size of a text area is specified by the <cols> and <rows> attributes (or with CSS).
                
                The name attribute is needed to reference the form data after the form is submitted (if you omit the name attribute, no data from the text area will be submitted).
                
                The id attribute is needed to associate the text area with a label. 
                
                Tip: Always add the <label> tag for best accessibility practices!`,
            };
            break;
        case "tfoot":
            objTag = {
                tag: "<tfoot></tfoot>",
                name: "Table Footer",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "table",
                ],
                html5Supported: true,
                desciption: `The <tfoot> tag is used to group footer content in an HTML table.

                The <tfoot> element is used in conjunction with the <thead> and <tbody> elements to specify each part of a table (footer, header, body).
                
                Browsers can use these elements to enable scrolling of the table body independently of the header and footer. Also, when printing a large table that spans multiple pages, these elements can enable the table header and footer to be printed at the top and bottom of each page.
                
                Note: The <tfoot> element must have one or more <tr> tags inside.
                
                The <tfoot> tag must be used in the following context: As a child of a <table> element, after any <caption>, <colgroup>, <thead>, and <tbody> elements.
                
                Tip: The <thead>, <tbody>, and <tfoot> elements will not affect the layout of the table by default. However, you can use CSS to style these elements (see example below)!`,
            };
            break;
        case "th":
            objTag = {
                tag: "<th></th>",
                name: "Table Header",
                textContent: true,
                type: "paired",
                blockLevel: "block",
                mainAttributes: ["abbr", "colspan", "headers", "rowspan", "scope"],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "tr",
                ],
                html5Supported: true,
                desciption: `The <th> tag defines a header cell in an HTML table.

                An HTML table has two kinds of cells:
                
                Header cells - contains header information (created with the <th> element)
                Data cells - contains data (created with the <td> element)
                The text in <th> elements are bold and centered by default.
                
                The text in <td> elements are regular and left-aligned by default.`,
            };
            break;
        case "thead":
            objTag = {
                tag: "<thead></thead>",
                name: "Table Head",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "table",
                ],
                html5Supported: true,
                desciption: `The <thead> tag is used to group header content in an HTML table.

                The <thead> element is used in conjunction with the <tbody> and <tfoot> elements to specify each part of a table (header, body, footer).
                
                Browsers can use these elements to enable scrolling of the table body independently of the header and footer. Also, when printing a large table that spans multiple pages, these elements can enable the table header and footer to be printed at the top and bottom of each page.
                
                Note: The <thead> element must have one or more <tr> tags inside.
                
                The <thead> tag must be used in the following context: As a child of a <table> element, after any <caption> and <colgroup> elements, and before any <tbody>, <tfoot>, and <tr> elements.
                
                Tip: The <thead>, <tbody>, and <tfoot> elements will not affect the layout of the table by default. However, you can use CSS to style these elements (see example below)!`,
            };
            break;
        case "time":
            objTag = {
                tag: "<time></time>",
                name: "Time",
                textContent: false,
                type: "paired",
                blockLevel: "inline",
                mainAttributes: ["datetime"],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "a",
                    "abbr",
                    "acronym",
                    "address",
                    "article",
                    "aside",
                    "b",
                    "bdi",
                    "bdo",
                    "big",
                    "blockquote",
                    "body",
                    "center",
                    "cite",
                    "dd",
                    "del",
                    "dfn",
                    "dialog",
                    "div",
                    "dt",
                    "em",
                    "footer",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "header",
                    "i",
                    "ins",
                    "li",
                    "main",
                    "nav",
                    "p",
                    "q",
                    "rp",
                    "rt",
                    "ruby",
                    "s",
                    "section",
                    "small",
                    "span",
                    "strike",
                    "sub",
                    "summary",
                    "sup",
                    "strong",
                    "td",
                    "th",
                    "tt",
                    "u",
                    "wbr",
                ],
                html5Supported: true,
                desciption: `The <time> tag defines a specific time (or datetime).

                The datetime attribute of this element is used translate the time into a machine-readable format so that browsers can offer to add date reminders through the user's calendar, and search engines can produce smarter search results.`,
            };
            break;
        case "title":
            objTag = {
                tag: "<title></title>",
                name: "Title",
                textContent: false,
                type: "paired",
                blockLevel: "",
                mainAttributes: [],
                supportAttributes: globalEventAttributes,
                validParent: [
                    "head",
                ],
                html5Supported: true,
                desciption: `The <title> tag defines the title of the document. The title must be text-only, and it is shown in the browser's title bar or in the page's tab.

                The <title> tag is required in HTML documents!
                
                The contents of a page title is very important for search engine optimization (SEO)! The page title is used by search engine algorithms to decide the order when listing pages in search results.
                
                The <title> element:
                
                defines a title in the browser toolbar
                provides a title for the page when it is added to favorites
                displays a title for the page in search-engine results
                Here are some tips for creating good titles:
                
                Go for a longer, descriptive title (avoid one- or two-word titles)
                Search engines will display about 50-60 characters of the title, so try not to have titles longer than that
                Do not use just a list of words as the title (this may reduce the page's position in search results)
                So, try to make the title as accurate and meaningful as possible!
                
                Note: You can NOT have more than one <title> element in an HTML document.`,
            };
            break;
        case "tr":
            objTag = {
                tag: "<tr></tr>",
                name: "Table Row",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "table",
                    "tbody",
                    "tfoot",
                    "thead",
                ],
                html5Supported: true,
                desciption: `The <tr> tag defines a row in an HTML table.

                A <tr> element contains one or more <th> or <td> elements.`,
            };
            break;
        case "track":
            objTag = {
                tag: "<track></track>",
                name: "Track",
                textContent: false,
                type: "paired",
                blockLevel: "",
                mainAttributes: ["default", "kind", "label", "src", "srclang"],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "audio",
                    "video",
                ],
                html5Supported: true,
                desciption: `The <track> tag specifies text tracks for <audio> or <video> elements.

                This element is used to specify subtitles, caption files or other files containing text, that should be visible when the media is playing.
                
                Tracks are formatted in WebVTT format (.vtt files).`,
            };
            break;
        case "tt":
            objTag = {
                tag: "<tt></tt>",
                name: "Teletype Text",
                textContent: false,
                type: "paired",
                blockLevel: "inline",
                mainAttributes: [],
                supportAttributes: [],
                validParent: [
                    "a",
                    "abbr",
                    "acronym",
                    "address",
                    "article",
                    "aside",
                    "b",
                    "bdi",
                    "bdo",
                    "big",
                    "blockquote",
                    "body",
                    "center",
                    "cite",
                    "dd",
                    "del",
                    "dfn",
                    "dialog",
                    "div",
                    "dt",
                    "em",
                    "footer",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "header",
                    "i",
                    "ins",
                    "li",
                    "main",
                    "nav",
                    "p",
                    "q",
                    "rp",
                    "rt",
                    "ruby",
                    "s",
                    "section",
                    "small",
                    "span",
                    "strike",
                    "sub",
                    "summary",
                    "sup",
                    "strong",
                    "td",
                    "th",
                    "u",
                    "wbr",
                ],
                html5Supported: false,
                desciption: `The <tt> tag was used in HTML 4 to define teletype text.`,
            };
            break;
        case "u":
            objTag = {
                tag: "<u></u>",
                name: "Underline",
                textContent: true,
                type: "paired",
                blockLevel: "inline",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "a",
                    "abbr",
                    "acronym",
                    "address",
                    "article",
                    "aside",
                    "b",
                    "bdi",
                    "bdo",
                    "big",
                    "blockquote",
                    "body",
                    "center",
                    "cite",
                    "dd",
                    "del",
                    "dfn",
                    "dialog",
                    "div",
                    "dt",
                    "em",
                    "footer",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "header",
                    "i",
                    "ins",
                    "li",
                    "main",
                    "nav",
                    "p",
                    "q",
                    "rp",
                    "rt",
                    "ruby",
                    "s",
                    "section",
                    "small",
                    "span",
                    "strike",
                    "sub",
                    "summary",
                    "sup",
                    "strong",
                    "td",
                    "th",
                    "tt",
                    "wbr",
                ],
                html5Supported: true,
                desciption: `The <u> tag represents some text that is unarticulated and styled differently from normal text, such as misspelled words or proper names in Chinese text. The content inside is typically displayed with an underline. You can change this with CSS (see example below). 

                Tip: Avoid using the <u> element where it could be confused for a hyperlink!`,
            };
            break;
        case "ul":
            objTag = {
                tag: "<ul></ul>",
                name: "Unordered List",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "article",
                    "body",
                    "div",
                    "footer",
                    "header",
                    "main",
                    "nav",
                    "section"
                ],
                html5Supported: true,
                desciption: `The <ul> tag defines an unordered (bulleted) list.

                Use the <ul> tag together with the <li> tag to create unordered lists.
                
                Tip: Use CSS to style lists.
                
                Tip: For ordered lists, use the <ol> tag.`,
            };
            break;
        case "var":
            objTag = {
                tag: "<var></var>",
                name: "Variable",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "a",
                    "abbr",
                    "acronym",
                    "address",
                    "article",
                    "aside",
                    "b",
                    "bdi",
                    "bdo",
                    "big",
                    "blockquote",
                    "body",
                    "center",
                    "cite",
                    "dd",
                    "del",
                    "dfn",
                    "dialog",
                    "div",
                    "dt",
                    "em",
                    "footer",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "header",
                    "i",
                    "ins",
                    "li",
                    "main",
                    "nav",
                    "p",
                    "q",
                    "rp",
                    "rt",
                    "ruby",
                    "s",
                    "section",
                    "small",
                    "span",
                    "strike",
                    "sub",
                    "summary",
                    "sup",
                    "strong",
                    "td",
                    "th",
                    "tt",
                    "u",
                    "wbr",
                ],
                html5Supported: true,
                desciption: `The <var> tag is used to defines a variable in programming or in a mathematical expression. The content inside is typically displayed in italic.

                Tip: This tag is not deprecated. However, it is possible to achieve richer effect by using CSS.`,
            };
            break;
        case "video":
            objTag = {
                tag: "<video></video>",
                name: "Video",
                textContent: false,
                type: "paired",
                blockLevel: "block",
                mainAttributes: [
                    "autoplay",
                    "controls",
                    "height",
                    "loop",
                    "muted",
                    "poster",
                    "preload",
                    "src",
                    "width",
                ],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "article",
                    "body",
                    "div",
                    "footer",
                    "header",
                    "main",
                    "nav",
                    "section"
                ],
                html5Supported: true,
                desciption: `The <video> tag is used to embed video content in a document, such as a movie clip or other video streams.

                The <video> tag contains one or more <source> tags with different video sources. The browser will choose the first source it supports.
                
                The text between the <video> and </video> tags will only be displayed in browsers that do not support the <video> element.
                
                There are three supported video formats in HTML: MP4, WebM, and OGG.`,
            };
            break;
        case "wbr":
            objTag = {
                tag: "<wbr></wbr>",
                name: "Word Break Opportunity)",
                textContent: true,
                type: "paired",
                blockLevel: "inline",
                mainAttributes: [],
                supportAttributes: getAllSupportAttributes(),
                validParent: [
                    "a",
                    "abbr",
                    "acronym",
                    "address",
                    "article",
                    "aside",
                    "b",
                    "bdi",
                    "bdo",
                    "big",
                    "blockquote",
                    "body",
                    "center",
                    "cite",
                    "dd",
                    "del",
                    "dfn",
                    "dialog",
                    "div",
                    "dt",
                    "em",
                    "footer",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "header",
                    "i",
                    "ins",
                    "li",
                    "main",
                    "nav",
                    "p",
                    "q",
                    "rp",
                    "rt",
                    "ruby",
                    "s",
                    "section",
                    "small",
                    "span",
                    "strike",
                    "sub",
                    "summary",
                    "sup",
                    "strong",
                    "td",
                    "th",
                    "tt",
                    "u",
                ],
                html5Supported: true,
                desciption: `The <wbr> (Word Break Opportunity) tag specifies where in a text it would be ok to add a line-break.

                Tip: When a word is too long, the browser might break it at the wrong place. You can use the <wbr> element to add word break opportunities.`,
            };
            break;
    }
    return objTag;
}
/* 
"article",
                    "body",
                    "div",
                    "footer",
                    "header",
                    "main",
                    "nav",
                    "section"
*/

/* 
"a",
                    "abbr",
                    "acronym",
                    "address",
                    "article",
                    "aside",
                    "b",
                    "bdi",
                    "bdo",
                    "big",
                    "blockquote",
                    "body",
                    "center",
                    "cite",
                    "dd",
                    "del",
                    "dfn",
                    "dialog",
                    "div",
                    "dt",
                    "em",
                    "footer",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "header",
                    "i",
                    "ins",
                    "li",
                    "main",
                    "nav",
                    "p",
                    "q",
                    "rp",
                    "rt",
                    "ruby",
                    "s",
                    "section",
                    "small",
                    "span",
                    "strike",
                    "sub",
                    "summary",
                    "sup",
                    "strong",
                    "td",
                    "th",
                    "tt",
                    "u",
                    "wbr",
*/
export { getTagInfo };
