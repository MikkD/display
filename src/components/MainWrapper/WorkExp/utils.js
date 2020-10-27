import uuid from 'react-uuid';
export const workExpData = [
    {
        company: 'Hogarth',
        project: 'GAF',
        date: 2020,
        keyPoints: [
            '1.Interfaced with clients on a weekly basis, providing technological expertise',
            '12.Interfaced with clients on a weekly basis, providing technological expertise',
            '123.Helped solidify a brand direction for blistabloc that spans both packaging and web'
        ],
        id: uuid(),
        isClicked: true
    },
    {
        company: 'Apple',
        project: 'Kronos',
        date: 2019,
        keyPoints: [
            '21.Worked closely with designers and management team to develop, document, and manage the conference’s marketing website using Jekyll, Sass, and JavaScript',
            '22.Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern',
        ],
        id: uuid(),
        isClicked: false
    }];