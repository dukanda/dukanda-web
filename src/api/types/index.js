/**
 * @typedef {Object} Image
 * @property {number} id
 * @property {string} documentId
 * @property {string} name
 * @property {string} alternativeText
 * @property {string} caption
 * @property {number} width
 * @property {number} height
 * @property {Record<string, unknown>} formats
 * @property {string} hash
 * @property {string} ext
 * @property {string} mime
 * @property {number} size
 * @property {string} url
 * @property {string} previewUrl
 * @property {string} provider
 * @property {Record<string, unknown>} provider_metadata
 * @property {{ id: number; documentId: string }[]} related
 * @property {Folder} folder
 * @property {string} folderPath
 * @property {string} createdAt
 * @property {string} updatedAt
 * @property {string} publishedAt
 * @property {User} createdBy
 * @property {User} updatedBy
 * @property {string} locale
 * @property {Localization[]} localizations
 */

/**
 * @typedef {Object} Folder
 * @property {number} id
 * @property {string} documentId
 * @property {string} name
 * @property {number} pathId
 * @property {Folder} [parent]
 * @property {Folder[]} [children]
 * @property {Image[]} [files]
 * @property {string} path
 * @property {string} createdAt
 * @property {string} updatedAt
 * @property {string} publishedAt
 * @property {User} createdBy
 * @property {User} updatedBy
 * @property {string} locale
 * @property {Localization[]} localizations
 */

/**
 * @typedef {Object} User
 * @property {number} id
 * @property {string} documentId
 */

/**
 * @typedef {Object} Localization
 * @property {number} id
 * @property {string} documentId
 */

/**
 * @typedef {Object} Tour
 * @property {number} id
 * @property {string} documentId
 * @property {string} name
 * @property {string} [description]
 * @property {string} start_date
 * @property {string} end_date
 * @property {number} available_slots
 * @property {Image} cover
 * @property {TourGuide} tour_guide
 * @property {Package[]} [packages]
 * @property {string} slug
 * @property {TourType[]} [tour_types]
 * @property {SharedCheckListComponent[]} [tours_benefits]
 * @property {string} createdAt
 * @property {string} updatedAt
 * @property {string} publishedAt
 * @property {User} createdBy
 * @property {User} updatedBy
 * @property {string} locale
 * @property {Localization[]} localizations
 */

/**
 * @typedef {Object} TourGuide
 * @property {number} id
 * @property {string} documentId
 * @property {string} name
 * @property {string} email
 * @property {string} phone
 * @property {string} [bio]
 * @property {Image} profile_picture
 * @property {Tour[]} [tours]
 */

/**
 * @typedef {Object} Package
 * @property {number} id
 * @property {string} documentId
 * @property {string} name
 * @property {string} description
 * @property {number} price
 * @property {{ id: number; documentId: string }[]} tours
 * @property {string} createdAt
 * @property {string} updatedAt
 * @property {string} publishedAt
 * @property {User} createdBy
 * @property {User} updatedBy
 * @property {string} locale
 * @property {Localization[]} localizations
 */

/**
 * @typedef {Object} TourType
 * @property {number} id
 * @property {string} documentId
 * @property {string} Name
 * @property {{ id: number; documentId: string }} passeio
 * @property {string} createdAt
 * @property {string} updatedAt
 * @property {string} publishedAt
 * @property {User} createdBy
 * @property {User} updatedBy
 * @property {string} locale
 * @property {Localization[]} localizations
 */

/**
 * @typedef {Object} SharedCheckListComponent
 * @property {number} id
 * @property {string} description
 * @property {boolean} Included
 */