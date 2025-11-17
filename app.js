// Simple static course/modules data
const data = {
  courses: [
    // Syllabus is a top-level course per your request
    {
      id: 0,
      slug: 'syllabus-course',
      title: 'Syllabus',
      modules: [
        { id: 1, title: 'Syllabus', content: '<h3>Site goal</h3><p>This site teaches prevention and response for kidnappings, abuse, and safety. Use the modules to learn tips, practice quick quizzes, and unlock the next lesson.</p>' }
      ]
    },
    {
      id: 1,
      slug: 'escaping',
      title: 'Escaping - Self defense',
      modules: [
        { id: 1, title: 'Recognize danger & escape routes', content: '', quizQuestions: [] },
        { id: 2, title: 'Verbal de-escalation and creating distance', content: '', quizQuestions: [] },
        { id: 3, title: 'Physical exits & improvised defenses', content: '', quizQuestions: [] },
        { id: 4, title: 'Using objects & environment to create distance', content: '', quizQuestions: [] }
      ]
    },
    { id: 2, slug: 'prevention', title: 'Prevention', modules: [
      { id:1, title:'Module 1', content:'', quizQuestions:[] },
      { id:2, title:'Module 2', content:'', quizQuestions:[] },
      { id:3, title:'Module 3', content:'', quizQuestions:[] },
      { id:4, title:'Module 4', content:'', quizQuestions:[] }
    ] },
    { id: 3, slug: 'home-safety', title: 'Home safety', modules: [
      { id:1, title:'Module 1', content:'', quizQuestions:[] },
      { id:2, title:'Module 2', content:'', quizQuestions:[] },
      { id:3, title:'Module 3', content:'', quizQuestions:[] },
      { id:4, title:'Module 4', content:'', quizQuestions:[] }
    ] },
    { id: 4, slug: 'abuse-signs', title: "Signs your friend is in an abusive relationship", modules: [
      { id:1, title:'Module 1', content:'', quizQuestions:[] },
      { id:2, title:'Module 2', content:'', quizQuestions:[] },
      { id:3, title:'Module 3', content:'', quizQuestions:[] },
      { id:4, title:'Module 4', content:'', quizQuestions:[] }
    ] },
    { id: 5, slug: 'suicide-awareness', title: 'Suicide awareness', modules: [
      { id:1, title:'Module 1', content:'', quizQuestions:[] },
      { id:2, title:'Module 2', content:'', quizQuestions:[] },
      { id:3, title:'Module 3', content:'', quizQuestions:[] },
      { id:4, title:'Module 4', content:'', quizQuestions:[] }
    ] }
  ]
  }

  const resources = [
    {
      id: 'emergency',
      title: 'Emergency (US)',
      phone: '911',
      url: 'tel:911',
      description: 'Call 911 for immediate danger or life-threatening emergencies.',
      tags: ['emergency']
    },
    {
      id: 'suicide',
      title: '988 Suicide & Crisis Lifeline (US)',
      phone: '988',
      url: 'https://988lifeline.org',
      description: 'Call or text 988 for immediate support if someone is in crisis.',
      tags: ['suicide']
    },
    {
      id: 'domestic',
      title: 'National Domestic Violence Hotline (US)',
      phone: '1-800-799-7233',
      url: 'https://www.thehotline.org',
      description: 'Confidential support for domestic violence survivors.',
      tags: ['abuse','domestic']
    },
    {
      id: 'missing',
      title: 'National Missing and Unidentified Persons System (NamUs)',
      phone: '',
      url: 'https://www.namus.gov',
      description: 'Resource for reporting and finding missing persons in the US.',
      tags: ['missing']
    },
    {
      id: 'intl-samaritans',
      title: 'International Helplines (Befrienders Worldwide)',
      phone: '',
      url: 'https://www.befrienders.org/need-to-talk',
      description: 'Find local helplines worldwide for emotional support and crisis help.',
      tags: ['suicide','global']
    }
  ]

function renderResources(){
  const container = document.getElementById('resourcesList')
  if(!container) return
  container.innerHTML = ''
  resources.forEach(r=>{
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.className = 'resource-link'
    a.href = r.url || '#'
    a.target = '_blank'
    a.rel = 'noopener'
    a.innerHTML = `<strong>${r.title}</strong>`
    if(r.phone){
      const p = document.createElement('span')
      p.className = 'phone'
      p.textContent = r.phone
      a.appendChild(p)
    }
    const desc = document.createElement('div')
    desc.className = 'small'
    desc.textContent = r.description
    li.appendChild(a)
    li.appendChild(desc)
    container.appendChild(li)
  })
}


// Persistence (localStorage key)
const STORAGE_KEY = 'lp_progress_v1'

function loadProgress(){
  try{ return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') }catch(e){return {}}
}
function saveProgress(p){ localStorage.setItem(STORAGE_KEY, JSON.stringify(p)) }

let progress = loadProgress()

// UI Elements
const coursesList = document.getElementById('coursesList')
const courseHeader = document.getElementById('courseHeader')
const modulesContainer = document.getElementById('modulesContainer')
const moduleTemplate = document.getElementById('moduleTemplate')
const sectionTemplate = document.getElementById('sectionTemplate')

function renderCourses(){
  coursesList.innerHTML = ''
  data.courses.forEach(c => {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.textContent = c.title
    a.href = '#'
    a.className = 'courseLink'
    a.addEventListener('click', (e)=>{e.preventDefault(); openCourse(c.id)})
    li.appendChild(a)
    coursesList.appendChild(li)
  })
}

function openCourse(courseId){
  const course = data.courses.find(x=>x.id===courseId)
  if(!course) return
  courseHeader.innerHTML = `<h2>${course.title}</h2><p class=\"small\">Select a module to view content. Complete quizzes to unlock next modules.</p>`
  renderCourseSections(course)
}

function renderCourseSections(course){
  modulesContainer.innerHTML = ''
  // Syllabus section
  const sylNode = sectionTemplate.content.cloneNode(true)
  const sylRoot = sylNode.querySelector('.section')
  const sylToggle = sylNode.querySelector('.sectionToggle')
  const sylTitle = sylNode.querySelector('.sectionTitle')
  const sylList = sylNode.querySelector('.sectionList')
  sylTitle.textContent = 'Syllabus'
  // sample syllabus item
  const sylLi = document.createElement('li')
  const meta = document.createElement('div')
  meta.className = 'fileMeta'
  meta.innerHTML = `<div class=\"fileTitle\">${course.title} Syllabus.pdf</div><div class=\"fileSub\">Syllabus</div>`
  const right = document.createElement('div')
  right.innerHTML = '<a class="resource-link" href="#">Download</a>'
  sylLi.appendChild(meta)
  sylLi.appendChild(right)
  sylList.appendChild(sylLi)
  sylToggle.addEventListener('click', ()=>{ sylRoot.classList.toggle('open') })
  modulesContainer.appendChild(sylNode)

  // Week / Module sections
  course.modules.forEach((m, idx)=>{
    const node = sectionTemplate.content.cloneNode(true)
    const root = node.querySelector('.section')
    const toggle = node.querySelector('.sectionToggle')
    const title = node.querySelector('.sectionTitle')
    const list = node.querySelector('.sectionList')

    title.textContent = `Week ${idx+1}: ${m.title}`

    // Create a slides / file item
    const slides = document.createElement('li')
    const slidesMeta = document.createElement('div')
    slidesMeta.className = 'fileMeta'
    slidesMeta.innerHTML = `<div class=\"fileTitle\">PowerPoint Slides</div><div class=\"fileSub\">${course.title} - Week ${idx+1}</div>`
    const slidesRight = document.createElement('div')
    slidesRight.innerHTML = '<a class="resource-link" href="#">PBH_250_3_Week_'+(idx+1)+'_Sync.pptx</a>'
    slides.appendChild(slidesMeta)
    slides.appendChild(slidesRight)
    list.appendChild(slides)

    // Create a quiz / participation item
    const quizLi = document.createElement('li')
    const quizMeta = document.createElement('div')
    quizMeta.className = 'fileMeta'
    quizMeta.innerHTML = `<div class=\"fileTitle\">Participation Poll</div><div class=\"fileSub\">Async (Week ${idx+1})</div>`
    const quizRight = document.createElement('div')
    const key = `${course.id}:${m.id}`
    const done = progress[key] && progress[key].completed
    const status = document.createElement('span')
    status.className = 'status ' + (done? 'check' : 'x')
    status.textContent = done ? '✔' : '✖'
    const takeBtn = document.createElement('button')
    takeBtn.textContent = 'Take Quiz'
    takeBtn.style.marginLeft = '10px'
    takeBtn.addEventListener('click', ()=>{
      // render quiz inline under this item
      // remove any existing inline quiz
      const existing = quizLi.querySelector('.inline-quiz')
      if(existing){ existing.remove(); return }
      const holder = document.createElement('div')
      holder.className = 'inline-quiz'
      holder.style.marginTop = '8px'
      // reuse renderQuiz to populate holder
      renderQuiz(holder, course, m, idx)
      quizLi.appendChild(holder)
    })
    quizRight.appendChild(status)
    quizRight.appendChild(takeBtn)
    quizLi.appendChild(quizMeta)
    quizLi.appendChild(quizRight)
    list.appendChild(quizLi)

    toggle.addEventListener('click', ()=>{ root.classList.toggle('open') })
    modulesContainer.appendChild(node)
  })
}

function isLocked(course, module, index){
  // first module unlocked by default
  if(index===0) return false
  // previous module must be completed
  const prevKey = `${course.id}:${course.modules[index-1].id}`
  return !(progress[prevKey] && progress[prevKey].completed)
}

function renderQuiz(container, course, module, index){
  container.innerHTML = ''
  const hasQuestions = module.quizQuestions && module.quizQuestions.length > 0
  const quiz = document.createElement('div')
  quiz.className = 'quiz'

  if(!hasQuestions){
    // Quiz empty for now — show a small placeholder
    const placeholder = document.createElement('div')
    placeholder.className = 'small'
    placeholder.textContent = 'Quiz coming soon.'
    quiz.appendChild(placeholder)
    container.appendChild(quiz)
    return
  }

  const q = document.createElement('div')
  q.className = 'question'
  q.innerHTML = `<strong>${module.quizQuestions[0].prompt}</strong>`
  quiz.appendChild(q)

  const choices = module.quizQuestions[0].choices

  choices.forEach(c =>{
    const label = document.createElement('label')
    label.className = 'choice'
    const input = document.createElement('input')
    input.type = 'radio'
    input.name = `quiz_${course.id}_${module.id}`
    input.value = c.id
    label.appendChild(input)
    label.appendChild(document.createTextNode(' ' + c.text))
    quiz.appendChild(label)
  })

  const submit = document.createElement('button')
  submit.textContent = 'Submit Quiz'
  submit.addEventListener('click', ()=>{
    const sel = document.querySelector(`input[name=quiz_${course.id}_${module.id}]:checked`)
    if(!sel){ alert('Please choose an answer.'); return }
    // check against module.quizQuestions[0].answer
    if(sel.value===module.quizQuestions[0].answer){
      alert('Correct! Module marked complete and next unlocked.')
      const key = `${course.id}:${module.id}`
      progress[key] = { completed: true }
      saveProgress(progress)
      // refresh the current view (course list or module page)
      handleRoute()
    } else {
      alert('Not quite. Review the module and try again.')
    }
  })

  quiz.appendChild(submit)
  container.appendChild(quiz)
}

// initial render
// initial render: show all courses as centered dropdowns
function renderAllCourses(){
  // Render each course as its own centered purple dropdown card
  modulesContainer.innerHTML = ''
  data.courses.forEach(course => {
    const card = document.createElement('div')
    card.className = 'courseCard'

    const header = document.createElement('div')
    header.className = 'courseHeader'
    header.innerHTML = `<div>${course.title}</div><div class="chev">▾</div>`
    card.appendChild(header)

    const body = document.createElement('div')
    body.className = 'sectionBody'
    body.style.display = 'none'
    // Render module rows for every course (syllabus will have its single module)
    if(course.modules && course.modules.length > 0){
      const ul = document.createElement('ul')
      ul.className = 'modulesList'
      course.modules.forEach((m, idx)=>{
        const li = document.createElement('li')
        li.className = 'moduleRow'
        const meta = document.createElement('div')
        meta.className = 'fileMeta'
        meta.innerHTML = `<div class=\"fileTitle\"><a href=\"#/courses/${course.id}/modules/${m.id}\" class=\"moduleLink\">${m.title}</a></div><div class=\"fileSub\">${m.title}</div>`
        li.appendChild(meta)
        ul.appendChild(li)
      })
      body.appendChild(ul)
    } else {
      body.innerHTML = '<div class="emptyPlaceholder">No modules yet.</div>'
    }
    card.appendChild(body)

    header.addEventListener('click', ()=>{
      if(body.style.display === 'none'){
        body.style.display = 'block'
        header.querySelector('.chev').textContent = '▴'
        header.classList.add('open')
      } else {
        body.style.display = 'none'
        header.querySelector('.chev').textContent = '▾'
        header.classList.remove('open')
      }
    })

    modulesContainer.appendChild(card)
  })
}

// render resources and courses
// render the single Syllabus view and the resources sidebar
// routing: if hash points to a module, render it; otherwise show syllabus view
function parseHash(){
  const h = location.hash || ''
  const m = h.match(/^#\/courses\/(\d+)\/modules\/(\d+)/)
  if(m) return { courseId: Number(m[1]), moduleId: Number(m[2]) }
  return null
}

function renderModulePage(courseId, moduleId){
  const course = data.courses.find(c=>c.id===courseId)
  if(!course) return renderAllCourses()
  const module = course.modules.find(mm=>mm.id===moduleId)
  if(!module) return renderAllCourses()

  modulesContainer.innerHTML = ''
  const card = document.createElement('div')
  card.className = 'courseCard'
    const header = document.createElement('div')
    // Use module page header style: plain, left-aligned title and smaller module subtitle
    header.className = 'courseHeader modulePageHeader'
    header.innerHTML = `
      <div class="modulePageTitle">
        <div class="courseTitle">${course.title}</div>
        <div class="moduleSubtitle">${module.title}</div>
      </div>
    `
  card.appendChild(header)

  const content = document.createElement('div')
  content.style.padding = '12px 0'
  // If this is the Syllabus module, show a generated course breakdown
  if(course.id === 0 && module.title && module.title.toLowerCase().includes('syllabus')){
    let html = '<h3>Course breakdown</h3>'
    html += '<p class="small">Below is an overview of all courses and their modules.</p>'
    html += '<ul class="small">'
    data.courses.forEach(c => {
      html += `<li style="margin:8px 0;"><strong>${c.title}</strong><ul style=\"margin:6px 0 0 12px;\">`
      c.modules.forEach(m => {
        html += `<li>${m.title}</li>`
      })
      html += '</ul></li>'
    })
    html += '</ul>'
    content.innerHTML = html
  } else {
    // Leave module page empty if no content provided (per request)
    content.innerHTML = module.content || ''
  }
  card.appendChild(content)

  // (Intentionally no quiz area on module pages — pages are blank per request)

  const back = document.createElement('button')
  back.className = 'backBtn'
  back.textContent = 'Home'
  back.addEventListener('click', ()=>{ location.hash = ''; renderAllCourses() })
  card.appendChild(back)

  modulesContainer.appendChild(card)
}

function handleRoute(){
  const parsed = parseHash()
  if(parsed){ renderModulePage(parsed.courseId, parsed.moduleId); return }
  renderAllCourses()
}

// initial render
handleRoute()
renderResources()

window.addEventListener('hashchange', handleRoute)

// Expose to window for debugging
window._LP = { data, progress }
