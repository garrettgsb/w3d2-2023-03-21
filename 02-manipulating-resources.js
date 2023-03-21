const blogs = [
  {
    authorId: 1,
    id: 1,
    title: 'Frankenstein, pt. 1',
    body: `<p>
    You will rejoice to hear that no disaster has accompanied the
    commencement of an enterprise which you have regarded with such evil
    forebodings.  I arrived here yesterday, and my first task is to assure
    my dear sister of my welfare and increasing confidence in the success
    of my undertaking.
    </p>

    <p>
    I am already far north of London, and as I walk in the streets of
    Petersburgh, I feel a cold northern breeze play upon my cheeks, which
    braces my nerves and fills me with delight.  Do you understand this
    feeling?  This breeze, which has travelled from the regions towards
    which I am advancing, gives me a foretaste of those icy climes.
    Inspirited by this wind of promise, my daydreams become more fervent
    and vivid.  I try in vain to be persuaded that the pole is the seat of
    frost and desolation; it ever presents itself to my imagination as the
    region of beauty and delight.  There, Margaret, the sun is for ever
    visible, its broad disk just skirting the horizon and diffusing a
    perpetual splendour.  There&mdash;for with your leave, my sister, I will put
    some trust in preceding navigators&mdash;there snow and frost are banished;
    and, sailing over a calm sea, we may be wafted to a land surpassing in
    wonders and in beauty every region hitherto discovered on the habitable
    globe.  Its productions and features may be without example, as the
    phenomena of the heavenly bodies undoubtedly are in those undiscovered
    solitudes.  What may not be expected in a country of eternal light?  I
    may there discover the wondrous power which attracts the needle and may
    regulate a thousand celestial observations that require only this
    voyage to render their seeming eccentricities consistent for ever.  I
    shall satiate my ardent curiosity with the sight of a part of the world
    never before visited, and may tread a land never before imprinted by
    the foot of man. These are my enticements, and they are sufficient to
    conquer all fear of danger or death and to induce me to commence this
    laborious voyage with the joy a child feels when he embarks in a little
    boat, with his holiday mates, on an expedition of discovery up his
    native river. But supposing all these conjectures to be false, you
    cannot contest the inestimable benefit which I shall confer on all
    mankind, to the last generation, by discovering a passage near the pole
    to those countries, to reach which at present so many months are
    requisite; or by ascertaining the secret of the magnet, which, if at
    all possible, can only be effected by an undertaking such as mine.
    </p>`
  },
  {
    authorId: 1,
    id: 2,
    title: 'Frankenstein, pt. 2',
    body: `<p>
    These reflections have dispelled the agitation with which I began my
    letter, and I feel my heart glow with an enthusiasm which elevates me
    to heaven, for nothing contributes so much to tranquillise the mind as
    a steady purpose&mdash;a point on which the soul may fix its intellectual
    eye.  This expedition has been the favourite dream of my early years. I
    have read with ardour the accounts of the various voyages which have
    been made in the prospect of arriving at the North Pacific Ocean
    through the seas which surround the pole.  You may remember that a
    history of all the voyages made for purposes of discovery composed the
    whole of our good Uncle Thomas&rsquo; library.  My education was neglected,
    yet I was passionately fond of reading.  These volumes were my study
    day and night, and my familiarity with them increased that regret which
    I had felt, as a child, on learning that my father&rsquo;s dying injunction
    had forbidden my uncle to allow me to embark in a seafaring life.
    </p>

    <p>
    These visions faded when I perused, for the first time, those poets
    whose effusions entranced my soul and lifted it to heaven.  I also
    became a poet and for one year lived in a paradise of my own creation;
    I imagined that I also might obtain a niche in the temple where the
    names of Homer and Shakespeare are consecrated.  You are well
    acquainted with my failure and how heavily I bore the disappointment.
    But just at that time I inherited the fortune of my cousin, and my
    thoughts were turned into the channel of their earlier bent.
    </p>
    `
  },
  {
    authorId: 2,
    id: 3,
    title: 'Pride & Prejudice, pt. 1',
    body: `<p>
    It is a truth universally acknowledged, that a single man in possession of
    a good fortune, must be in want of a wife.
  </p>
  <p>
    However little known the feelings or views of such a man may be on his
    first entering a neighbourhood, this truth is so well fixed in the minds
    of the surrounding families, that he is considered as the rightful property
    of some one or other of their daughters.
  </p>
  <p>
    &ldquo;My dear Mr. Bennet,&rdquo; said his lady to him one day, &ldquo;have you heard that
    Netherfield Park is let at last?&rdquo;
   </p>
  <p>
    Mr. Bennet replied that he had not.
  </p>
  <p>
    &ldquo;But it is,&rdquo; returned she; &ldquo;for Mrs. Long has just been here, and she told
    me all about it.&rdquo;
   </p>
  <p>
    Mr. Bennet made no answer.
  </p>
  <p>
    &ldquo;Do not you want to know who has taken it?&rdquo; cried his wife impatiently.
  </p>
  <p>
    &ldquo;<i>You</i> want to tell me, and I have no objection to hearing it.&rdquo;
   </p>
  <p>
    This was invitation enough.
  </p>
    `
  },
  {
    authorId: 2,
    id: 4,
    title: 'Pride & Prejudice, pt. 2',
    body: `<p>
    &ldquo;Why, my dear, you must know, Mrs. Long says that Netherfield is taken by
    a young man of large fortune from the north of England; that he came down
    on Monday in a chaise and four to see the place, and was so much delighted
    with it that he agreed with Mr. Morris immediately; that he is to take
    possession before Michaelmas, and some of his servants are to be in the
    house by the end of next week.&rdquo;
   </p>
  <p>
    &ldquo;What is his name?&rdquo;
   </p>
  <p>
    &ldquo;Bingley.&rdquo;
   </p>
  <p>
    &ldquo;Is he married or single?&rdquo;
   </p>
  <p>
    &ldquo;Oh! single, my dear, to be sure! A single man of large fortune; four or
    five thousand a year. What a fine thing for our girls!&rdquo;
   </p>
  <p>
    &ldquo;How so? how can it affect them?&rdquo;
   </p>
  <p>
    &ldquo;My dear Mr. Bennet,&rdquo; replied his wife, &ldquo;how can you be so tiresome! You
    must know that I am thinking of his marrying one of them.&rdquo;
   </p>
  <p>
    &ldquo;Is that his design in settling here?&rdquo;
   </p>
  <p>
    &ldquo;Design! nonsense, how can you talk so! But it is very likely that he <i>may</i>
    fall in love with one of them, and therefore you must visit him as soon as
    he comes.&rdquo;
   </p>
    `
  },
  {
    authorId: 2,
    id: 5,
    title: 'Pride & Prejudice, pt. 4', // Whoooops
    body: `<p>
    &ldquo;I see no occasion for that. You and the girls may go, or you may send
    them by themselves, which perhaps will be still better, for as you are as
    handsome as any of them, Mr. Bingley might like you the best of the party.&rdquo;
   </p>
  <p>
    &ldquo;My dear, you flatter me. I certainly <i>have</i> had my share of beauty,
    but I do not pretend to be anything extraordinary now. When a woman has
    five grown-up daughters, she ought to give over thinking of her own
    beauty.&rdquo;
   </p>
  <p>
    &ldquo;In such cases, a woman has not often much beauty to think of.&rdquo;
   </p>
  <p>
    &ldquo;But, my dear, you must indeed go and see Mr. Bingley when he comes into
    the neighbourhood.&rdquo;
   </p>
  <p>
    &ldquo;It is more than I engage for, I assure you.&rdquo;
   </p>
  <p>
    &ldquo;But consider your daughters. Only think what an establishment it would be
    for one of them. Sir William and Lady Lucas are determined to go, merely
    on that account, for in general, you know, they visit no newcomers. Indeed
    you must go, for it will be impossible for <i>us</i> to visit him, if you
    do not.&rdquo;
   </p>
  <p>
    &ldquo;You are over scrupulous, surely. I dare say Mr. Bingley will be very glad
    to see you; and I will send a few lines by you to assure him of my hearty
    consent to his marrying whichever he chooses of the girls; though I must
    throw in a good word for my little Lizzy.&rdquo;
   </p>
  <p>
    &ldquo;I desire you will do no such thing. Lizzy is not a bit better than the
    others; and I am sure she is not half so handsome as Jane, nor half so
    good-humoured as Lydia. But you are always giving <i>her</i> the
    preference.&rdquo;
   </p>
  <p>
    &ldquo;They have none of them much to recommend them,&rdquo; replied he; &ldquo;they are all
    silly and ignorant like other girls; but Lizzy has something more of
    quickness than her sisters.&rdquo;
   </p>
  <p>
    &ldquo;Mr. Bennet, how can you abuse your own children in such a way? You
    take delight in vexing me. You have no compassion on my poor nerves.&rdquo;
   </p>
  <p>
    &ldquo;You mistake me, my dear. I have a high respect for your nerves. They are
    my old friends. I have heard you mention them with consideration these
    twenty years at least.&rdquo;
   </p>
  <p>
    &ldquo;Ah, you do not know what I suffer.&rdquo;
   </p>
   `
  },
  {
    authorId: 3,
    id: 6,
    title: 'Alice in Wonderland, pt. 1',
    body: `<p>
    Alice was beginning to get very tired of sitting by her sister on the bank, and
    of having nothing to do: once or twice she had peeped into the book her sister
    was reading, but it had no pictures or conversations in it, &ldquo;and what is
    the use of a book,&rdquo; thought Alice &ldquo;without pictures or
    conversations?&rdquo;
    </p>

    <p>
    So she was considering in her own mind (as well as she could, for the hot day
    made her feel very sleepy and stupid), whether the pleasure of making a
    daisy-chain would be worth the trouble of getting up and picking the daisies,
    when suddenly a White Rabbit with pink eyes ran close by her.
    </p>

    <p>
    There was nothing so <i>very</i> remarkable in that; nor did Alice think it so
    <i>very</i> much out of the way to hear the Rabbit say to itself, &ldquo;Oh
    dear! Oh dear! I shall be late!&rdquo; (when she thought it over afterwards, it
    occurred to her that she ought to have wondered at this, but at the time it all
    seemed quite natural); but when the Rabbit actually <i>took a watch out of its
    waistcoat-pocket</i>, and looked at it, and then hurried on, Alice started to
    her feet, for it flashed across her mind that she had never before seen a
    rabbit with either a waistcoat-pocket, or a watch to take out of it, and
    burning with curiosity, she ran across the field after it, and fortunately was
    just in time to see it pop down a large rabbit-hole under the hedge.
    </p>

    <p>
    In another moment down went Alice after it, never once considering how in the
    world she was to get out again.
    </p>
    `
  },
  {
    authorId: 3,
    id: 7,
    title: 'Alice in Wonderland, pt. 2',
    body: `<p>
    The rabbit-hole went straight on like a tunnel for some way, and then dipped
    suddenly down, so suddenly that Alice had not a moment to think about stopping
    herself before she found herself falling down a very deep well.
    </p>

    <p>
    Either the well was very deep, or she fell very slowly, for she had plenty of
    time as she went down to look about her and to wonder what was going to happen
    next. First, she tried to look down and make out what she was coming to, but it
    was too dark to see anything; then she looked at the sides of the well, and
    noticed that they were filled with cupboards and book-shelves; here and there
    she saw maps and pictures hung upon pegs. She took down a jar from one of the
    shelves as she passed; it was labelled &ldquo;ORANGE MARMALADE&rdquo;, but to
    her great disappointment it was empty: she did not like to drop the jar for
    fear of killing somebody underneath, so managed to put it into one of the
    cupboards as she fell past it.
    </p>

    <p>
    &ldquo;Well!&rdquo; thought Alice to herself, &ldquo;after such a fall as this,
    I shall think nothing of tumbling down stairs! How brave they&rsquo;ll all
    think me at home! Why, I wouldn&rsquo;t say anything about it, even if I fell
    off the top of the house!&rdquo; (Which was very likely true.)
    </p>

    <p>
    Down, down, down. Would the fall <i>never</i> come to an end? &ldquo;I wonder
    how many miles I&rsquo;ve fallen by this time?&rdquo; she said aloud. &ldquo;I
    must be getting somewhere near the centre of the earth. Let me see: that would
    be four thousand miles down, I think&mdash;&rdquo; (for, you see, Alice had
    learnt several things of this sort in her lessons in the schoolroom, and though
    this was not a <i>very</i> good opportunity for showing off her knowledge, as
    there was no one to listen to her, still it was good practice to say it over)
    &ldquo;&mdash;yes, that&rsquo;s about the right distance&mdash;but then I
    wonder what Latitude or Longitude I&rsquo;ve got to?&rdquo; (Alice had no idea
    what Latitude was, or Longitude either, but thought they were nice grand words
    to say.)
    </p>

    <p>
    Presently she began again. &ldquo;I wonder if I shall fall right <i>through</i>
    the earth! How funny it&rsquo;ll seem to come out among the people that walk
    with their heads downward! The Antipathies, I think&mdash;&rdquo; (she was
    rather glad there <i>was</i> no one listening, this time, as it didn&rsquo;t
    sound at all the right word) &ldquo;&mdash;but I shall have to ask them what
    the name of the country is, you know. Please, Ma&rsquo;am, is this New Zealand
    or Australia?&rdquo; (and she tried to curtsey as she spoke&mdash;fancy
    <i>curtseying</i> as you&rsquo;re falling through the air! Do you think you
    could manage it?) &ldquo;And what an ignorant little girl she&rsquo;ll think me
    for asking! No, it&rsquo;ll never do to ask: perhaps I shall see it written up
    somewhere.&rdquo;
    </p>

    <p>
    Down, down, down. There was nothing else to do, so Alice soon began talking
    again. &ldquo;Dinah&rsquo;ll miss me very much to-night, I should think!&rdquo;
    (Dinah was the cat.) &ldquo;I hope they&rsquo;ll remember her saucer of milk at
    tea-time. Dinah my dear! I wish you were down here with me! There are no mice
    in the air, I&rsquo;m afraid, but you might catch a bat, and that&rsquo;s very
    like a mouse, you know. But do cats eat bats, I wonder?&rdquo; And here Alice
    began to get rather sleepy, and went on saying to herself, in a dreamy sort of
    way, &ldquo;Do cats eat bats? Do cats eat bats?&rdquo; and sometimes, &ldquo;Do
    bats eat cats?&rdquo; for, you see, as she couldn&rsquo;t answer either
    question, it didn&rsquo;t much matter which way she put it. She felt that she
    was dozing off, and had just begun to dream that she was walking hand in hand
    with Dinah, and saying to her very earnestly, &ldquo;Now, Dinah, tell me the
    truth: did you ever eat a bat?&rdquo; when suddenly, thump! thump! down she
    came upon a heap of sticks and dry leaves, and the fall was over.
    </p>
    `
  },
  {
    authorId: 3,
    id: 8,
    title: 'Alice in Wonderland, pt. 3',
    body: `
    <p>
    Alice was not a bit hurt, and she jumped up on to her feet in a moment: she
    looked up, but it was all dark overhead; before her was another long passage,
    and the White Rabbit was still in sight, hurrying down it. There was not a
    moment to be lost: away went Alice like the wind, and was just in time to hear
    it say, as it turned a corner, &ldquo;Oh my ears and whiskers, how late
    it&rsquo;s getting!&rdquo; She was close behind it when she turned the corner,
    but the Rabbit was no longer to be seen: she found herself in a long, low hall,
    which was lit up by a row of lamps hanging from the roof.
    </p>

    <p>
    There were doors all round the hall, but they were all locked; and when Alice
    had been all the way down one side and up the other, trying every door, she
    walked sadly down the middle, wondering how she was ever to get out again.
    </p>

    <p>
    Suddenly she came upon a little three-legged table, all made of solid glass;
    there was nothing on it except a tiny golden key, and Alice&rsquo;s first
    thought was that it might belong to one of the doors of the hall; but, alas!
    either the locks were too large, or the key was too small, but at any rate it
    would not open any of them. However, on the second time round, she came upon a
    low curtain she had not noticed before, and behind it was a little door about
    fifteen inches high: she tried the little golden key in the lock, and to her
    great delight it fitted!
    </p>

    <p>
    Alice opened the door and found that it led into a small passage, not much
    larger than a rat-hole: she knelt down and looked along the passage into the
    loveliest garden you ever saw. How she longed to get out of that dark hall, and
    wander about among those beds of bright flowers and those cool fountains, but
    she could not even get her head through the doorway; &ldquo;and even if my head
    would go through,&rdquo; thought poor Alice, &ldquo;it would be of very little
    use without my shoulders. Oh, how I wish I could shut up like a telescope! I
    think I could, if I only knew how to begin.&rdquo; For, you see, so many
    out-of-the-way things had happened lately, that Alice had begun to think that
    very few things indeed were really impossible.
    </p>

    <p>
    There seemed to be no use in waiting by the little door, so she went back to
    the table, half hoping she might find another key on it, or at any rate a book
    of rules for shutting people up like telescopes: this time she found a little
    bottle on it, (&ldquo;which certainly was not here before,&rdquo; said Alice,)
    and round the neck of the bottle was a paper label, with the words &ldquo;DRINK
    ME,&rdquo; beautifully printed on it in large letters.
    </p>

    <p>
    It was all very well to say &ldquo;Drink me,&rdquo; but the wise little Alice
    was not going to do <i>that</i> in a hurry. &ldquo;No, I&rsquo;ll look
    first,&rdquo; she said, &ldquo;and see whether it&rsquo;s marked
    &lsquo;<i>poison</i>&rsquo; or not&rdquo;; for she had read several nice little
    histories about children who had got burnt, and eaten up by wild beasts and
    other unpleasant things, all because they <i>would</i> not remember the simple
    rules their friends had taught them: such as, that a red-hot poker will burn
    you if you hold it too long; and that if you cut your finger <i>very</i> deeply
    with a knife, it usually bleeds; and she had never forgotten that, if you drink
    much from a bottle marked &ldquo;poison,&rdquo; it is almost certain to
    disagree with you, sooner or later.
    </p>

    <p>
    However, this bottle was <i>not</i> marked &ldquo;poison,&rdquo; so Alice
    ventured to taste it, and finding it very nice, (it had, in fact, a sort of
    mixed flavour of cherry-tart, custard, pine-apple, roast turkey, toffee, and
    hot buttered toast,) she very soon finished it off.
    </p>
    `
  },
];

const authors = [
  {
    id: 1,
    name: 'Mary',
    email: 'maryshelley@gutenberg.org',
  },
  {
    id: 2,
    name: 'Jane',
    email: 'janeausten@gutenberg.org',
  },
  {
    id: 3,
    name: 'Lewis',
    email: 'lewiscarroll@gutenberg.org',
  },
];

// Blog Actions

function getBlogById(id) {
  return blogs.find(blog => blog.id === id);
}

function getBlogsForAuthor(authorId) {
  return blogs.filter(blog => blog.authorId.toLowerCase() === Number(authorId));
}

function editBlog(id, newValues) {
  const blog = getBlogById(id);
  if (!blog) throw new Error(`Blog with ID ${id} could not be found`);
  const blogIdx = blogs.indexOf(blog);
  blogs[blogIdx] = { ...blog, ...newValues };
}

function addBlog(authorName, title, body) {
  const author = getAuthorByName(authorName);
  if (!author) throw new Error(`No author with name ${authorName}!`);
  blogs.push({id: nextId(blogs), authorId: author.id, title, body});
}

function deleteBlog(id) {
  const blog = getBlogById(id);
  if (!blog) throw new Error(`Blog with ID ${id} could not be found`);
  const blogIdx = blogs.indexOf(blog);
  blogs.splice(blogIdx, 1);
}

function nextId(arr) {
  return Math.max(...arr.map(b => b.id)) + 1;
}


// Author Actions

function getAuthorById(id) { return authors.find(author => author.id === Number(id)); }
function getAuthorByName(name) { return authors.find(author => author.name === name); }
function editAuthor(id, newValues) {
  const author = getAuthorById(id);
  if (!author) throw new Error(`Author with ID ${id} could not be found`);
  const authorIdx = authors.indexOf(author);
  authors[authorIdx] = { ...author, ...newValues };
}
function addAuthor(name, email) { authors.push({ id: nextId(authors), name, email }); }
function deleteAuthor(id) {
  const author = getAuthorById(id);
  if (!author) throw new Error(`Author with ID ${id} could not be found`);
  const authorIdx = authors.indexOf(author);
  authors.splice(authorIdx, 1);
}


/*

GET /blogs                -> Just render the blogs array
GET /blogs/:id            -> getBlogById()
POST /blogs               -> addBlog()
POST /blogs/:id           -> editBlog()
POST /blogs/:id/delete    -> deleteBlog()

GET /authors              -> Just render the authors array
GET /authors/:id          -> getAuthorById() (Might also involve getBlogsForAuthor())
POST /authors             -> addAuthor()
POST /authors/:id         -> editAuthor()
POST /authors/:id/delete  -> deleteAuthor()

Bonus:

GET /authors/:id/blogs    -> getBlogsForAuthor()

*/
