// // Tipo para el objeto Field
// export type Field = {
//     id: string;
//     ref: string;
//     type:
//       | "dropdown"
//       | "yes_no"
//       | "legal"
//       | "short_text"
//       | "email"
//       | "number"
//       | "rating"
//       | "long_text"
//       | "opinion_scale"
//       | "picture_choice"
//       | "multiple_choice"
//       | "file_upload"
//       | "date"
//       | "ranking";
//   };
  
//   // Tipo para las respuestas individuales (Answer)
//  export type Answer =
//     | {
//         type: "text";
//         text: string;
//         field: Field;
//       }
//     | {
//         type: "boolean";
//         boolean: boolean;
//         field: Field;
//       }
//     | {
//         type: "email";
//         email: string;
//         field: Field;
//       }
//     | {
//         type: "number";
//         number: number;
//         field: Field;
//       }
//     | {
//         type: "choices";
//         choices: { labels: string[] };
//         field: Field;
//       }
//     | {
//         type: "choice";
//         choice: { label: string };
//         field: Field;
//       }
//     | {
//         type: "date";
//         date: string;
//         field: Field;
//       }
//     | {
//         type: "file_url";
//         file_url: string;
//         field: Field;
//       };
  
//   // Tipo para las variables adicionales (Variable)
//  export type Variable = {
//     key: string;
//     type: "text" | "number";
//     text?: string;
//     number?: number;
//   };
  
//   // Tipo para los metadatos (Metadata)
//  export type Metadata = {
//     browser: string;
//     network_id: string;
//     platform: string;
//     referer: string;
//     user_agent: string;
//   };
  
//   // Tipo para los cálculos realizados automáticamente (Calculated)
//  export type Calculated = {
//     score: number;
//   };
  
//   // Tipo para un solo elemento de la lista (Item)
//  export type Item = {
//     answers: Answer[];
//     calculated: Calculated;
//     hidden: Record<string, unknown>;
//     landed_at: string;
//     landing_id: string;
//     metadata: Metadata;
//     response_id: string;
//     submitted_at: string;
//     token: string;
//     variables: Variable[];
//   };
  
//   // Tipo para el formulario completo (Form)
//  export type Form = {
//     items: Item[];
//   };
  



type Attachment = {
    href: string;
    properties?: {
      description?: string;
      decorative?: boolean;
    };
    scale?: number;
    type: "image" | "video";
  };
  
  type Layout = {
    attachment?: Attachment;
    placement?: "left" | "right";
    type: "float" | "wallpaper";
    viewport_overrides?: {
      large: {
        placement: "left" | "right";
        type: "float";
      };
    };
  };
  
  type Choice = {
    label: string;
    ref?: string;
    attachment?: Attachment;
  };
  
  type Price = {
    type: "variable" | "fixed";
    value: string | number;
  };
  
  type Properties = {
    description?: string;
    separator?: string;
    structure?: string;
    allow_multiple_selection?: boolean;
    allow_other_choice?: boolean;
    randomize?: boolean;
    vertical_alignment?: boolean;
    alphabetical_order?: boolean;
    choices?: Choice[];
    show_labels?: boolean;
    supersized?: boolean;
    labels?: {
      left?: string;
      center?: string;
      right?: string;
    };
    start_at_one?: boolean;
    steps?: number;
    max_length?: number;
    min_value?: number;
    max_value?: number;
    shape?: "star" | "circle";
    button_text?: string;
    currency?: string;
    price?: Price;
    show_button?: boolean;
    fields?: Field[];
  };
  
  type Validations = {
    required: boolean;
    max_length?: number;
    min_value?: number;
    max_value?: number;
  };
  
 export type Field = {
    attachment?: Attachment;
    layout?: Layout;
    properties: Properties;
    ref: string;
    title: string;
    type:
      | "date"
      | "dropdown"
      | "email"
      | "file_upload"
      | "legal"
      | "long_text"
      | "multiple_choice"
      | "ranking"
      | "number"
      | "opinion_scale"
      | "picture_choice"
      | "rating"
      | "short_text"
      | "statement"
      | "website"
      | "yes_no"
      | "payment"
      | "group"
      | "matrix";
    validations?: Validations;
  };
  
  export type FormFields = {
    fields: Field[];
    title: string,
    description: string,
  };
  