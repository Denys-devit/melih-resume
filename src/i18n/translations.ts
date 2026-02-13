export type Locale = 'en' | 'tr'

export const translations = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      education: 'Education',
      certifications: 'Certifications',
      gallery: 'Gallery',
      contact: 'Contact',
      downloadCv: 'Download CV',
    },
    hero: {
      title: 'Human Resources · HR Operations · Recruitment & Onboarding',
      tagline:
        'HR Management graduate with hands-on experience supporting HR operations in large-scale industrial environments.',
      getInTouch: 'Get in Touch',
      location: 'Eskişehir, Türkiye · Open to Relocation',
    },
    about: {
      title: 'About',
      p1: 'Focused on HR Operations, Recruitment Support, Onboarding, Personnel Administration, and HR systems–based process tracking.',
      p2:
        'Detail-oriented and highly organized, with strong discipline in documentation, follow-up, and data accuracy. Comfortable using English in professional communication and familiar with SAP HCM and SuccessFactors—quick to learn, and motivated to take ownership while contributing to structured, efficient HR processes.',
      p3:
        'Gained practical knowledge of SAP HR & SuccessFactors, including core HR data management, organizational structures, basic reporting, and compliance-focused HR workflows.',
    },
    skills: {
      title: 'Core Skills',
      items: [
        'Recruitment & Onboarding Support',
        'Personnel Files, Documentation & HR Administration',
        'Attendance Tracking (Timesheet) & HR Reporting',
        'SGK Entry/Exit Declarations & E-declaration Systems',
        'HR Systems: SAP HCM / SuccessFactors',
        'MS Office (Excel, Word, PowerPoint)',
        'Teams | Google Workspace | Canva | Zoom',
        'Remote Support Tools',
      ],
    },
    experience: {
      title: 'Work Experience',
      kipas: {
        role: 'Human Resources Intern',
        period: 'Feb 2025 – May 2025',
        points: [
          'Supported recruitment and onboarding processes end-to-end in a 1000+ employee industrial environment',
          'Assisted HR operations: personnel files, documentation, and ERP-based data entry/accuracy',
          'Supported payroll-related tasks: SGK entry/exit declarations, attendance tracking, monthly puantaj follow-up',
          'Gained practical exposure to severance & notice compensation calculation basics under Turkish labor law',
        ],
      },
      hisarlar: {
        role: 'Human Resources Intern',
        period: 'Jul 2024 – Aug 2024',
        points: [
          'Organized and updated 60+ personnel files, ensuring documentation completeness and proper archiving',
          'Supported recruitment administration through candidate follow-ups, scheduling coordination, and document preparation',
          'Assisted onboarding/orientation processes; coordinated onboarding flow for 30+ interns',
          'Supported HR tracking/reporting tasks, including documentation of employee health status information',
        ],
      },
      matematik: {
        role: 'Technical Support Specialist (Remote)',
        period: 'Jun 2021 – Sep 2021',
        points: [
          'Provided structured support to 500+ users, improving service quality through clear communication and step-by-step guidance',
          'Logged issues, tracked resolutions, and ensured follow-up—strengthening process tracking and documentation discipline',
          'Worked with multiple stakeholders (students/parents), building strong communication, patience, and problem-solving skills',
        ],
      },
    },
    education: {
      title: 'Education',
      school: 'Adnan Menderes University — Söke Faculty of Business',
      degree: 'B.A. in Human Resources Management · GPA: 3.0',
      courses:
        'Relevant Coursework: HRM, HR Planning, Leadership, Recruitment & Selection, Performance Management, Training & Development, Labor Law, Job Evaluation & Compensation',
    },
    certifications: {
      title: 'Certifications',
      items: [
        {
          name: 'Recruiting, Hiring, and Onboarding Employees',
          issuer: 'Coursera (University of Minnesota), 2025',
          description:
            'End-to-end recruitment process, job posting, candidate sourcing, screening, and interview coordination.',
        },
        {
          name: 'Managing Employee Performance',
          issuer: 'Coursera (University of Minnesota), 2024',
          description: 'KPI- and OKR-based performance management approaches.',
        },
        {
          name: 'Diversity and Inclusion for HR Professionals',
          issuer: 'Coursera (UC Irvine), 2024',
          description: 'DEI principles, bias-reduction, inclusive policy design.',
        },
        {
          name: 'SAP HR + SuccessFactors Training',
          issuer: 'Impress Academy, 2025',
          description: 'Core HR data management, organizational structures, compliance workflows.',
        },
      ],
    },
    languages: {
      title: 'Languages',
      items: [
        { lang: 'Turkish', level: 'Native' },
        { lang: 'English', level: 'Upper-Intermediate (B2)' },
        { lang: 'German', level: 'Beginner (A1)' },
      ],
    },
    gallery: {
      title: 'Event Gallery',
      hint: 'Drag to reorder · Click to enlarge',
      viewFull: 'View full size',
      close: 'Close',
    },
    contact: {
      title: 'Get in Touch',
      location: 'Eskişehir, Türkiye · Open to Relocation',
      note: 'Reference available upon request.',
    },
  },
  tr: {
    nav: {
      about: 'Hakkımda',
      skills: 'Yetenekler',
      experience: 'Deneyim',
      education: 'Eğitim',
      certifications: 'Sertifikalar',
      gallery: 'Galeri',
      contact: 'İletişim',
      downloadCv: 'CV İndir',
    },
    hero: {
      title: 'İnsan Kaynakları · İK Operasyonları · İşe Alım & Oryantasyon',
      tagline:
        'Büyük ölçekli endüstriyel ortamlarda İK operasyonlarını destekleyen, uygulamalı deneyime sahip İnsan Kaynakları Yönetimi mezunu.',
      getInTouch: 'İletişime Geç',
      location: 'Eskişehir, Türkiye · Yer Değişikliğine Açık',
    },
    about: {
      title: 'Hakkımda',
      p1:
        'İK Operasyonları, İşe Alım Desteği, Oryantasyon, Personel Yönetimi ve İK sistemleri tabanlı süreç takibine odaklanıyorum.',
      p2:
        'Detaylara özen gösteren ve son derece düzenli, dokümantasyon, takip ve veri doğruluğunda güçlü disipline sahip. Profesyonel iletişimde İngilizce kullanımında rahat, SAP HCM ve SuccessFactors ile aşina—hızlı öğrenen, yapılandırılmış ve verimli İK süreçlerine katkıda bulunurken sahiplenmeye motive.',
      p3:
        'SAP HR & SuccessFactors konusunda temel İK veri yönetimi, organizasyonel yapılar, temel raporlama ve uyum odaklı İK iş akışları dahil pratik bilgi edindim.',
    },
    skills: {
      title: 'Temel Yetenekler',
      items: [
        'İşe Alım & Oryantasyon Desteği',
        'Personel Dosyaları, Dokümantasyon & İK Yönetimi',
        'Devam Takibi (Puantaj) & İK Raporlama',
        'SGK Giriş/Çıkış Bildirimleri & E-bildirge Sistemleri',
        'İK Sistemleri: SAP HCM / SuccessFactors',
        'MS Office (Excel, Word, PowerPoint)',
        'Teams | Google Workspace | Canva | Zoom',
        'Uzaktan Destek Araçları',
      ],
    },
    experience: {
      title: 'İş Deneyimi',
      kipas: {
        role: 'İnsan Kaynakları Stajyeri',
        period: 'Şub 2025 – May 2025',
        points: [
          '1000+ çalışanlı endüstriyel ortamda işe alım ve oryantasyon süreçlerini uçtan uca destekledim',
          'İK operasyonlarına yardımcı oldum: personel dosyaları, dokümantasyon ve ERP tabanlı veri girişi/doğruluğu',
          'Bordro ile ilgili görevlere destek: SGK giriş/çıkış bildirimleri, devam takibi, aylık puantaj takibi',
          'Türk iş hukuku kapsamında kıdem ve ihbar tazminatı hesaplama temellerinde pratik deneyim kazandım',
        ],
      },
      hisarlar: {
        role: 'İnsan Kaynakları Stajyeri',
        period: 'Tem 2024 – Ağu 2024',
        points: [
          '60+ personel dosyasını düzenledim ve güncelledim, dokümantasyon bütünlüğü ve uygun arşivleme sağladım',
          'Aday takipleri, planlama koordinasyonu ve belge hazırlığı ile işe alım yönetimine destek verdim',
          'Oryantasyon süreçlerine yardımcı oldum; 30+ stajyer için oryantasyon akışını koordine ettim',
          'Çalışan sağlık durumu bilgilerinin dokümantasyonu dahil İK takip/raporlama görevlerine destek verdim',
        ],
      },
      matematik: {
        role: 'Teknik Destek Uzmanı (Uzaktan)',
        period: 'Haz 2021 – Eyl 2021',
        points: [
          '500+ kullanıcıya yapılandırılmış destek sağladım, net iletişim ve adım adım rehberlik ile hizmet kalitesini artırdım',
          'Sorunları kaydettim, çözümleri takip ettim ve takip sağladım—süreç takibi ve dokümantasyon disiplinini güçlendirdim',
          'Birden fazla paydaşla (öğrenci/veli) çalıştım, güçlü iletişim, sabır ve problem çözme becerileri geliştirdim',
        ],
      },
    },
    education: {
      title: 'Eğitim',
      school: 'Adnan Menderes Üniversitesi — Söke İşletme Fakültesi',
      degree: 'İnsan Kaynakları Yönetimi Lisans · GPA: 3.0',
      courses:
        'İlgili Dersler: İKY, İK Planlaması, Liderlik, İşe Alım & Seçim, Performans Yönetimi, Eğitim & Geliştirme, İş Hukuku, İş Değerleme & Ücretlendirme',
    },
    certifications: {
      title: 'Sertifikalar',
      items: [
        {
          name: 'Çalışan İşe Alım, İstihdam ve Oryantasyonu',
          issuer: 'Coursera (Minnesota Üniversitesi), 2025',
          description:
            'Uçtan uca işe alım süreci, iş ilanı, aday kaynağı, eleme ve mülakat koordinasyonu.',
        },
        {
          name: 'Çalışan Performansı Yönetimi',
          issuer: 'Coursera (Minnesota Üniversitesi), 2024',
          description: 'KPI ve OKR tabanlı performans yönetimi yaklaşımları.',
        },
        {
          name: 'İK Profesyonelleri için Çeşitlilik ve Kapsayıcılık',
          issuer: 'Coursera (UC Irvine), 2024',
          description: 'Çeşitlilik, eşitlik ve kapsayıcılık ilkeleri, önyargı azaltma, kapsayıcı politika tasarımı.',
        },
        {
          name: 'SAP HR + SuccessFactors Eğitimi',
          issuer: 'Impress Academy, 2025',
          description: 'Temel İK veri yönetimi, organizasyonel yapılar, uyum iş akışları.',
        },
      ],
    },
    languages: {
      title: 'Diller',
      items: [
        { lang: 'Türkçe', level: 'Ana Dil' },
        { lang: 'İngilizce', level: 'Üst-Orta Seviye (B2)' },
        { lang: 'Almanca', level: 'Başlangıç (A1)' },
      ],
    },
    gallery: {
      title: 'Etkinlik Galerisi',
      hint: 'Sıralamak için sürükleyin · Büyütmek için tıklayın',
      viewFull: 'Tam boyutta görüntüle',
      close: 'Kapat',
    },
    contact: {
      title: 'İletişime Geç',
      location: 'Eskişehir, Türkiye · Yer Değişikliğine Açık',
      note: 'Referans talep üzerine sunulabilir.',
    },
  },
} as const
