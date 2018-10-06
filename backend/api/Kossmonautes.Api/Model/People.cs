using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kossmonautes.Api.Model
{
    public class People
    {
        public string Id { get; set; }

        public string Name { get; set; }


        public static People Of(string name)
        {
            return new People()
            {
                Id = Guid.NewGuid().ToString(),
                Name = name
            };
        }
    }
}
