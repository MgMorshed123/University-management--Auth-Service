import { IAcademicSemesterCodes, IAcademicSemesterMonths, IAcademicSemesterTitles } from "./academicSemster.interface";



  export const academicSemesterTitles: IAcademicSemesterTitles[] = [
    'Autumn',
    'Summer',
    'Fall',
  ];
  


  export const academicSemesterCodes: IAcademicSemesterCodes[] = [
    '01',
    '02',
    '03',
  ];
  

  
  export const acdemicSemesterMonths: IAcademicSemesterMonths[] = [

    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',

  ];
  
  export const academicSemesterTitleCodeMapper: {

    [key: string]: string;
  } = {

    Autumn: '01',
    Summer: '02',
    Fall: '03',
    
  };

export   const academisSemesterSearchableFields = ['title', 'code', 'year']


export   const academisSemesterFilterableFields = ['searchTerm', 'title', 'code', 'year']
